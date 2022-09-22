import { Request, Response, NextFunction } from 'express';

export const requestUrl = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  console.log(request.url);
  next();
};

export const defaultErrorHandler = (
  error: any,
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  let statusCode: number, message: string;

  switch (error.message) {
    case 'NAME_IS_REQUIRED':
      statusCode = 400;
      message = '请提供用户名';
      break;
    case 'PASSWORD_IS_REQUIRED':
      statusCode = 400;
      message = '请提供密码';
      break;
    case 'USER_ALREADY_EXIST':
      statusCode = 400;
      message = '用户名已存在';
      break;
    case 'USER_DOES_NOT_EXIST':
      statusCode = 400;
      message = '用户名不存在';
      break;
    case 'PASSWORD_DOES_NOT_MATCH':
      statusCode = 400;
      message = '密码不匹配';
      break;
    case 'UNAUTHORIZED':
      statusCode = 401;
      message = '请先登陆';
      break;
    default:
      statusCode = 500;
      message = '服务暂时出了点问题～～';
      break;
  }

  response.status(statusCode).send({ message });
};
