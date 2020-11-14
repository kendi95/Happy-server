import { getRepository } from "typeorm";
import consola from 'consola';

import Orphanages from "../../models/Orphanages";

const {error} = consola;

export const destroyOrphanage = async (id: number) => {
  try {
    const repo = getRepository(Orphanages);
    await repo.delete(id);
    return;
  } catch (err) {
    error(err);
    return;
  }
}