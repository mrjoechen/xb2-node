import express from 'express';
import * as authController from './auth.controller';
import { authGuard, validateLoginData } from './auth.middleware';

const router = express.Router();

/**
 * 用户登陆
 */
router.post('/login', validateLoginData, authController.login);

/**
 * 验证登陆
 */
router.post('/auth/validate', authGuard, authController.validate);

export default router;
