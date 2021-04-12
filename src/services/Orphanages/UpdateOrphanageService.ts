import { getRepository } from "typeorm";

import { Orphanage } from "../../interfaces";
import Orphanages from "../../models/Orphanages";

export const updateOrphanage = async (id: number, { 
  name, 
  latitude, 
  longitude, 
  about,
  whatsapp,
  instructions, 
  open_on_weekends, 
  opening_hours }: Orphanage ) => {
  const repo = getRepository(Orphanages);
  await repo.update(id, {
    name, 
    latitude, 
    longitude, 
    about, 
    whatsapp,
    instructions, 
    opening_hours, 
    open_on_weekends,
  });
}