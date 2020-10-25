import {Request, Response, NextFunction} from 'express';
import * as Yup from 'yup';
import Consola from 'consola';

interface ValidationErros {
  [key: string]: string[];
}

const {error} = Consola;
const schema = Yup.object().shape({
  name: Yup.string().required(),
  latitude: Yup.number().required(),
  longitude: Yup.number().required(),
  about: Yup.string().required().max(300),
  instructions: Yup.string().required(),
  opening_hours: Yup.string().required(),
  open_on_weekends: Yup.boolean().required(),
});

export async function orphanageValidation(req: Request, res: Response, next: NextFunction) {
  try {
    const {
      name, 
      latitude, 
      longitude, 
      about, 
      instructions, 
      opening_hours, 
      open_on_weekends,
    } = req.body;
  
    const data = {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours, 
      open_on_weekends: open_on_weekends === 'true',
    };
  
    await schema.validate(data, {abortEarly: false});
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