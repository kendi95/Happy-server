import express, { json } from 'express';
import cors from 'cors';
import consola from 'consola';
import 'express-async-errors';

import './database/connection';
import routes from './routes';
import errorHanlder from './errors/handler';

const { success } = consola;

const server = express();
server.use(cors());
server.use(json());
server.use(routes);
server.use(errorHanlder);

server.listen(3333, () => {
  success('🚀 Server is running in port 3333...');
});