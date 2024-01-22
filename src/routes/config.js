import { Router } from 'express';
import { ConfigController } from '../controllers/config.controller.js';

export const configRouter = Router();

configRouter.get('/configuration', ConfigController.getConfiguration);
configRouter.post('/configuration', ConfigController.createConfiguration);
configRouter.get('/notifications', ConfigController.getAllNotifications);
configRouter.post('/notifications', ConfigController.createNotification);
