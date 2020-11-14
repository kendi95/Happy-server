import {Request, Response, NextFunction} from 'express';
import * as Yup from 'yup';
import Consola from 'consola';

import { ValidationErros } from '../interfaces';
import { validateToken } from '../utils/webToken';

const {error} = Consola;

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(8).required(),
});

export const authValidation = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await schema.validate(req.body, {abortEarly: false});

    const { authorization } = req.headers;

    if (!authorization) {
      return new Error('You must provid the token.')
    }

    const [_, token] = authorization.split(' ');

    if (!validateToken(token)) {
      return new Error('Token is invalid or expired.')
    }

    return next();
  } catch (err) {
    error(err);
    if (err instanceof Yup.ValidationError) {
      let errors: ValidationErros = {};

      err.inner.forEach(error => {
        errors[error.path] = error.errors;
      })
      return res.status(400).json({ message: 'Error validation.', errors });
    }
  }
  
}