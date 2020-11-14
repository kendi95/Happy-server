import 'dotenv/config';
import express, { json } from 'express';
import cors from 'cors';
import consola from 'consola';
import 'express-async-errors';

import './database/connection';
import routes from './routes';
import errorHanlder from './errors/handler';

const { success, error } = consola;

const server = express();
server.use(cors());
server.use(json());
server.use(routes);
server.use(errorHanlder);

if (process.env.APP_PORT) {
  server.listen(process.env.APP_PORT, () => {
    success(`🚀 Server is running in port ${process.env.APP_PORT}...`);
  });
} else {
  error('❌  Não há valor nessa variável "APP_PORT"');
}