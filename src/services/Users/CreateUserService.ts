import { getRepository } from "typeorm";

import { User } from "../../interfaces";
import Users from "../../models/Users";

import { encrypt } from "../../utils/bcrypt";

export const createUser = async ({
  name,
  email,
  password,
  phone
}: User) => {
  const repo = getRepository(Users);

  const user = repo.create({
    name,
    email,
    password: await encrypt(password),
    phone
  });

  await repo.save(user);

  delete user.password;

  return user;
}