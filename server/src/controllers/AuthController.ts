import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import db from '../database/connection';

const authConfig = require('../config/auth.json');

function generateToken(params ={}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400,
  });
}

export default class AuthController {
  async register(req: Request, res: Response) {
    const {
      name,
      email,
      password
    } = req.body;

    const trx = await db.transaction();

    try {
      const hash = await bcrypt.hash(password, 10);

      const InsertedUsersId = await trx('users').insert({
        name,
        email,
        password: hash,
        avatar: "https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png",
        bio: "",
        whatsapp: ""
      });      

      await trx.commit();

      return res.status(201).json({
        name,
        email,
        token: generateToken({ id: InsertedUsersId[0] })
      });

    } catch (err) {
      await trx.rollback();
      
      const errMsg = err.message;

      if(errMsg.includes("UNIQUE")) {
        return res.status(400).json({
          error: "User already exists"
        });
      }

      return res.status(400).json({
        error: "Registration failed"
      });
    }

  }

  async authenticate(req: Request, res: Response) {
    const { email, password } = req.body;

    const user = (await db('users').select('*').where({
      email
    }))[0];
    
    if(!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    if(!await bcrypt.compare(password, user.password)) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    user.password = undefined;
    
    res.json({
      user,
      token: generateToken({ id: user.id })
    });
  }
}