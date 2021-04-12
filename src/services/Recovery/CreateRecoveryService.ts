import { v4 as uuidV4 } from 'uuid';
import { getRepository } from 'typeorm';

import UsersToken from '../../models/UsersToken';

import {findByEmail} from '../Users/FindUserByEmailService';
import { RecoveryEmail } from "../../interfaces";
import { generateToken } from '../../utils/webToken';
import { sendMail } from '../../utils/sendMail';
import { sendSMS } from '../../utils/sendSMS';

export const createRecovery = async ({email}: RecoveryEmail) => {
  const user = await findByEmail(email)

  if (!user) {
    throw new Error(`Email não existe`);
  }

  try {
    const token = generateToken(String(user.id), '1h') as string;
    const code = uuidV4().substring(0, 5);

    await sendMail({
      to: [email],
      subject: 'Recuperação de senha',
      message: `<p>Seu token é: ${token}</p>`
    });

    await sendSMS({
      body: `Seu código é: ${code}`,
      from: '+16788091993',
      to: `+55${user.phone}`
    });

    const repo = getRepository(UsersToken);
    const userToken = repo.create({ token, code, used: false });
    await repo.save(userToken);
  } catch (error) {
    return error;
  }
}