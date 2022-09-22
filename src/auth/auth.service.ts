import jwt from 'jsonwebtoken';
import { PRIVATE_KEY } from '../app/app.config';

interface SignTokenOptions {
  payload?: any;
}

export const signToken = (option: SignTokenOptions) => {
  const { payload } = option;
  const token = jwt.sign(payload, PRIVATE_KEY, { algorithm: 'RS256' });

  return token;
};
