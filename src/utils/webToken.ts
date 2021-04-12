import 'dotenv/config';
import {sign, verify} from 'jsonwebtoken';
import consola from 'consola';

const {error} = consola;

export const generateToken = (id: string, expiresIn: string | number) => {
  try {
    if (!process.env.APP_SECRET) {
      throw Error('Não há chave de segredo definido.');
    }
    return sign({id}, process.env.APP_SECRET, {expiresIn});
  } catch (err) {
    error(err.message);
    return err;
  }
}

export const validateToken = (token: string) => {
  try {
    if (!process.env.APP_SECRET) {
      throw Error('Não há chave de segredo definido.');
    }
    return verify(token, process.env.APP_SECRET);
  } catch (err) {
    error(err.message);
    return err;
  }
}