import {Request, Response, NextFunction} from 'express';
import * as Yup from 'yup';
import Consola from 'consola';

import { ValidationErros } from '../interfaces';

const {error} = Consola;

const schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  phone: Yup.string().max(11).required(),
  password: Yup.string().min(8).required(),
});

export const userValidation = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await schema.validate(req.body, {abortEarly: false});
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
    return res.status(400).json({ error: err.message });
  }
  
}