import { Request, Response, NextFunction } from 'express';
import { signToken } from './auth.service';

export const login = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { name, password } = request.body;

  // const { id, name } = request.body;
  // const payload = { id, name };
  // try {
  //   const token = signToken({ payload });
  //   response.send({ id, name, token });
  // } catch (error) {
  //   next(error);
  // }

  response.send({ message: `👏 欢迎回来， ${name}` });
};

export const validate = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  response.sendStatus(200);
};
