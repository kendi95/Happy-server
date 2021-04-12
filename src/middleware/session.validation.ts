import {Request, Response, NextFunction} from 'express';
import * as Yup from 'yup';

import { ValidationErros } from '../interfaces';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('O email informado nào é um email válido.')
    .required('Campo obrigatório'),
  password: Yup.string()
    .min(8, 'A senha deve conter 8 caracteres.')
    .required('Campo obrigatório.'),
});

export const sessionValidation = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await schema.validate(req.body, {abortEarly: false});

    return next();
  } catch (err) {
    if (err instanceof Yup.ValidationError) {
      let errors: ValidationErros = {};

      err.inner.forEach((error, index) => {
        errors[error.path] = err.errors[index];
      })
      return res.status(400).json({ message: 'Erro de validação.', errors });
    }
    return res.status(400).json({ error: err.message });
  }
  
}