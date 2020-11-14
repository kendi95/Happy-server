import 'dotenv/config';
import {sign, verify} from 'jsonwebtoken';
import consola from 'consola';

const {error} = consola;

export const generateToken = (id: string) => {
  try {
    if (!process.env.APP_SECRET) {
      return error('Não há valor nessa variável "APP_SECRET"');
    }
    return sign({id}, process.env.APP_SECRET, {expiresIn: '24h'});
  } catch (error) {
    return new Error(`Erro ao gerar token: ${error}`);
  }
}

export const validateToken = (token: string) => {
  try {
    if (!process.env.APP_SECRET) {
      return error('Não há valor nessa variável "APP_SECRET"');
    }
    return verify(token, process.env.APP_SECRET);
  } catch (error) {
    return new Error(`Erro ao validar token: ${error}`);
  }
}