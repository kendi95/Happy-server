import {ErrorRequestHandler} from 'express';
import Consola from 'consola';

const {error} = Consola;

const errorHandler: ErrorRequestHandler = (err, request, response, next) => {
  error(err);

  return response.status(500).json({ message: 'Internal server error' });
}

export default errorHandler;