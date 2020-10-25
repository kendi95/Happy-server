import {createConnection} from 'typeorm';
import consola from 'consola';

const { success, error } = consola;

try {
  createConnection();
  success('Database connection successful...');
} catch (err) {
  error(err);
}

