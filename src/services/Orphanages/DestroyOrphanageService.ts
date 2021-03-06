import { getRepository } from "typeorm";

import Orphanages from "../../models/Orphanages";

export const destroyOrphanage = async (id: number) => {
  const repo = getRepository(Orphanages);
  await repo.delete(id);
  return;
}