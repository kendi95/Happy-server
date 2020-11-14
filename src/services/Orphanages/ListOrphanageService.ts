import { getRepository } from "typeorm";
import consola from 'consola';

import Orphanages from "../../models/Orphanages";
import orphanages_view from "../../views/orphanages_view";

const {error} = consola;

export const listOrphanage = async () => {
  try {
    const repo = getRepository(Orphanages);
    const orphanages = await repo.find({
      relations: ['images']
    });
    return orphanages_view.renderMany(orphanages);
  } catch (err) {
    error(err);
    return;
  }
}