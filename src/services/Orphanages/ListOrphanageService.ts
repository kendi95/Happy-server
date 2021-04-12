import { getRepository } from "typeorm";

import Orphanages from "../../models/Orphanages";
import orphanages_view from "../../views/orphanages_view";

export const listOrphanage = async (status: string) => {
  const repo = getRepository(Orphanages);
  const orphanages = await repo.find({
    where: { status },
    relations: ['images']
  });
  return orphanages_view.renderMany(orphanages);
}