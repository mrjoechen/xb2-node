import express from 'express';
import * as authController from './auth.controller';
import { validateLoginData } from './auth.middleware';

const router = express.Router();

router.post('/login',  validateLoginData, authController.login);

export default router;