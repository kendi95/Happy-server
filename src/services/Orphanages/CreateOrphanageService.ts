import { getRepository } from "typeorm";
import consola from 'consola';

import { Orphanage } from "../../interfaces";
import Orphanages from "../../models/Orphanages";

const {error} = consola;

export const createOrphanage = async ({ 
  name, 
  latitude, 
  longitude, 
  about,
  whatsapp,
  images, 
  instructions, 
  open_on_weekends, 
  opening_hours }: Omit<Orphanage, 'id'> ) => {
  const repo = getRepository(Orphanages);

  try {
    const orphanage = repo.create({
      name, 
      latitude, 
      longitude, 
      about, 
      whatsapp,
      instructions, 
      opening_hours, 
      open_on_weekends,
      images
    });
  
    await repo.save(orphanage);
    return orphanage;
  } catch (err) {
    error(err);
    return;
  }
}