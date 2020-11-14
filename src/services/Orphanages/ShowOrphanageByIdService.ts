import { getRepository } from "typeorm";
import consola from 'consola';

import Orphanages from "../../models/Orphanages";
import orphanages_view from "../../views/orphanages_view";

const {error} = consola;

export const showOrphanageById = async (id: number) => {
  try {
    const repo = getRepository(Orphanages);
    const orphanage = await repo.findOneOrFail(id, {
      relations: ['images']
    });
    return orphanages_view.render(orphanage);
  } catch (err) {
    error(err);
    return;
  }
}