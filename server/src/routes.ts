import express from 'express';

import authMiddleware from './middlewares/auth';

import AuthController from './controllers/AuthController';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();


const authController = new AuthController();
const classesController = new ClassesController();
const connectionsController = new ConnectionsController();

// Descomente para ativar a autenticação nas rotas definidas
// routes.use('/connections', authMiddleware);
// routes.use('/classes', authMiddleware);

routes.post('/register', authController.register);
routes.post('/authenticate', authController.authenticate);

routes.post('/classes', classesController.create);
routes.get('/classes', classesController.index);

routes.get('/connections', connectionsController.index)
routes.post('/connections', connectionsController.create)


export default routes;