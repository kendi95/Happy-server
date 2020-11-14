import { getRepository } from "typeorm";
import consola from 'consola';

import { Image } from "../../interfaces";
import Images from "../../models/Images";

const {error} = consola;

export const createImage = async ({ path }: Omit<Image , 'id'> ) => {
  const repo = getRepository(Images);

  try {
    const image = repo.create({ path });
    await repo.save(image);
    return image;
  } catch (err) {
    error(err);
    return;
  }
}