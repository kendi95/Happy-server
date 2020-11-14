import consola from 'consola';

import {findByEmail} from '../Users/FindUserByEmailService';
import { Session } from "../../interfaces";
import { validate } from '../../utils/bcrypt';
import { generateToken } from '../../utils/webToken';

const {error} = consola;

export const createSession = async ({email, password}: Session) => {
  try {
    const user = await findByEmail(email)

    if (!validate(password, user.password)) {
      new Error('A senha está incorreta.');
    }

    delete user.password;

    const token = generateToken(String(user.id));
    return {
      user,
      token: `Bearer ${token}`
    };
  } catch (err) {
    error(err);
    return;
  }
}