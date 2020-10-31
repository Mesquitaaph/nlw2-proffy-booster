import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const authConfig = require('../config/auth.json');

interface DecodedObject {
  id: string;
}

interface UserRequest extends Request{
  userId: number | string;
}

export default (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if(!authHeader) {
    return res.status(401).json({ message: 'No token provided' });
  }

  const parts = authHeader.split(' ');
  
  if(!(parts.length === 2)) {
    return res.status(401).json({ message: 'Token error' });
  }

  const [ scheme, token ] = parts;

  if(!/^Bearer$/i.test(scheme)) {    
    return res.status(401).json({ message: 'Malformatted token' });
  }

  jwt.verify(token, authConfig.secret, (err: any, decoded: object  | undefined) => {
    if(err) return res.status(401).json({ message: 'Invalid token' });

    if(decoded){
      const decodedId = (decoded as DecodedObject).id;
      (req as UserRequest).userId = decodedId;
    }

    return next();
  });
};