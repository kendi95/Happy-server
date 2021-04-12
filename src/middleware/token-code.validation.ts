import {Request, Response, NextFunction} from 'express';
import * as Yup from 'yup';
import Consola from 'consola';

import { validateToken } from '../utils/webToken';

import { ValidationErros } from '../interfaces';

const {error} = Consola;

export const tokenCodeValidation = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { token } = req.query as { token: string };
    const { code } = req.body as { code: string };

    if (!token) {
      throw Error('O token é obrigatório.');
    }

    if (!code) {
      throw Error('O código é obrigatório.');
    }

    if (!validateToken(token)) {
      throw Error('O token está inválido ou expirado.');
    }
    // usar pacote `free-mobile-sms-api` para enviar o código de segurança para o numero da pessoa
    // repassar o token no parametro da url via front-end
    return next();
  } catch (err) {
    error(err.message);
    if (err instanceof Yup.ValidationError) {
      let errors: ValidationErros = {};

      err.inner.forEach((error, index) => {
        errors[error.path] = err.errors[index];
      })
      return res.status(400).json({ message: 'Erro de validação.', errors });
    }
    return res.status(400).json({ errors: err.message });
  }
}