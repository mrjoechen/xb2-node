import { Request, Response, NextFunction } from 'express';
import * as userService from '../user/user.service';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { PUBLIC_KEY } from '../app/app.config';

export const validateLoginData = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  console.log('验证用户登录数据');

  const { name, password } = request.body;
  // console.log(password);

  if (!name) return next(new Error('NAME_IS_REQUIRED'));

  if (!password) return next(new Error('PASSWORD_IS_REQUIRED'));

  const user = await userService.getUserByName(name, { password: true });
  console.log(user);
  if (!user) return next(new Error('USER_DOES_NOT_EXIST'));

  const matched = await bcrypt.compare(password, user.password);
  if (!matched) return next(new Error('PASSWORD_DOES_NOT_MATCH'));

  request.body.user = user;
  console.log(user);
  next();
};

export const authGuard = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  console.log('验证用户身份');

  try {
    const token = request.header('Authorization');
    if (!token) throw new Error();

    jwt.verify(token, PUBLIC_KEY, {
      algorithms: ['ES256'],
    });
  } catch (error) {
    console.log(error);
  }
};
