import { getRepository } from "typeorm";

import Users from "../../models/Users";

export const findByEmail = async (email: string) => {
  const repo = getRepository(Users);

  const user = await repo.findOne({
    where: { email }
  })

  if (!user) {
    new Error(`Não existe usuário com email: ${email}`);
  }
  return user;
}