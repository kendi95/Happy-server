import { getRepository } from "typeorm";

import Orphanages from "../../models/Orphanages";
import orphanages_view from "../../views/orphanages_view";

export const showOrphanageById = async (id: number) => {
  const repo = getRepository(Orphanages);
  const orphanage = await repo.findOneOrFail(id, {
    relations: ['images']
  });
  return orphanages_view.render(orphanage);
}