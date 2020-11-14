import { getRepository } from "typeorm";
import consola from 'consola';

import { User } from "../../interfaces";
import Users from "../../models/Users";

import { encrypt } from "../../utils/bcrypt";

const {error} = consola;

export const createUser = async ({
  name,
  email,
  password
}: User) => {
  try {
    const repo = getRepository(Users);

    const user = repo.create({
      name,
      email,
      password: await encrypt(password),
    });

    await repo.save(user);

    delete user.password;

    return user;
  } catch (err) {
    error(err);
    return;
  }
}