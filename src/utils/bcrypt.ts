import { hash, compare } from 'bcrypt';

export const encrypt = async (password: string) => {
  return hash(password, 8);
}

export const validate = async (password: string, hashedPassword: string) => {
  return compare(password, hashedPassword);
}