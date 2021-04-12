import { getRepository } from "typeorm";

import { Orphanage } from "../../interfaces";
import Orphanages from "../../models/Orphanages";

export const createOrphanage = async ({ 
  name, 
  latitude, 
  longitude, 
  about,
  whatsapp,
  telephone,
  images, 
  instructions, 
  open_on_weekends, 
  opening_hours }: Omit<Orphanage, 'id'> ) => {
  const repo = getRepository(Orphanages);

  const orphanage = repo.create({
    name, 
    latitude, 
    longitude, 
    about, 
    whatsapp,
    telephone,
    instructions, 
    opening_hours, 
    open_on_weekends: Boolean(open_on_weekends),
    status: 'PENDING',
    images
  });

  await repo.save(orphanage);
  return orphanage;
}