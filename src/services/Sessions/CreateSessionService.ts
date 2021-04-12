import {findByEmail} from '../Users/FindUserByEmailService';
import { Session } from "../../interfaces";
import { validate } from '../../utils/bcrypt';
import { generateToken } from '../../utils/webToken';

export const createSession = async ({email, password}: Session) => {
  const user = await findByEmail(email)

  if (!user) {
    throw Error(`Não existe usuário com este email: ${email}`)
  }

  if (! (await validate(password, user.password))) {
    throw Error('A senha está incorreta.');
  }

  delete user.password;

  const token = generateToken(String(user.id), '24h');
  return {
    user,
    token: `Bearer ${token}`
  };
}