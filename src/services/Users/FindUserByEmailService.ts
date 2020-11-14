import { getRepository } from "typeorm";
import consola from 'consola';

import Users from "../../models/Users";

const {error} = consola;

export const findByEmail = async (email: string) => {
  try {
    const repo = getRepository(Users);

    const user = await repo.findOne({
      where: { email }
    })

    if (!user) {
      new Error('Não existe usuário com esse email');
    }

    return user;
  } catch (err) {
    error(err);
    return;
  }
}