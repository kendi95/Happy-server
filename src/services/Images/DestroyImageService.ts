import { getRepository } from "typeorm";
import consola from 'consola';

import Images from "../../models/Images";

const {error} = consola;

export const destroyImage = async (id: number) => {
  try {
    const repo = getRepository(Images);
    await repo.delete(id);
    return;
  } catch (err) {
    error(err);
    return;
  }
}