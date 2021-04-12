import { getRepository } from "typeorm";

import Orphanages from "../../models/Orphanages";

export const updateStatusOrphanage = async (id: number, status: string ) => {
  const repo = getRepository(Orphanages);
  return await repo.update(id, { status }); 
}