import { getRepository } from "typeorm";
import fs from 'fs';
import {promisify} from 'util';

import Images from "../../models/Images";

const unlinkAsync = promisify(fs.unlink);

export const destroyImage = async (id: number) => {
  const repo = getRepository(Images);
  const image = await repo.findOne(id);
  await unlinkAsync(`${__dirname}/../../../uploads/${image.path}`);
  await repo.delete(id);
  return;
}