import {Request, Response, NextFunction} from 'express';

import { validateToken } from '../utils/webToken';

export const authValidation = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      throw Error('Você precisa um token de autenticação.')
    }

    const [_, token] = authorization.split(' ');

    if (!validateToken(token)) {
      throw Error('O token está inválido ou expirado.')
    }

    return next();
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
  
}