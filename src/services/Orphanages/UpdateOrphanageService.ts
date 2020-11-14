import { getRepository } from "typeorm";
import consola from 'consola';

import { Orphanage } from "../../interfaces";
import Orphanages from "../../models/Orphanages";

const {error} = consola;

export const updateOrphanage = async (id: number, { 
  name, 
  latitude, 
  longitude, 
  about,
  whatsapp,
  // images, 
  instructions, 
  open_on_weekends, 
  opening_hours }: Orphanage ) => {
  const repo = getRepository(Orphanages);

  try {
    const orphanage = await repo.update(id, {
      name, 
      latitude, 
      longitude, 
      about, 
      whatsapp,
      instructions, 
      opening_hours, 
      open_on_weekends,
      // images
    }) 
  
    return orphanage;
  } catch (err) {
    error(err);
    return;
  }
}