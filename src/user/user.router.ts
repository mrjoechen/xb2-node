import exress from 'express';
import * as userController from './user.controller';
import { hashPassword, validateUserData } from './user.middleware';

const router = exress.Router();

router.post('/users', validateUserData, hashPassword, userController.store);

export default router;
