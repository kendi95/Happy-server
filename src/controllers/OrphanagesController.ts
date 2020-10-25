import {Request, Response} from 'express';
import consola from 'consola';
import {getRepository} from 'typeorm';

import Orphanages from '../models/Orphanages';
import orphanageView from '../views/orphanages_view';

const {error} = consola;

class OrphanagesController {
  async index(req: Request, res: Response) {
    const repo = getRepository(Orphanages);
    const orphanages = await repo.find({
      relations: ['images']
    });
    return res.status(200).json(orphanageView.renderMany(orphanages));
  }
  async show(req: Request, res: Response) {
    const {id} = req.params;
      const repo = getRepository(Orphanages);
      const orphanage = await repo.findOneOrFail(id, {
        relations: ['images']
      });
      return res.status(200).json(orphanageView.render(orphanage));
  }

  async create(req: Request, res: Response) {
    const {
      name, 
      latitude, 
      longitude, 
      about, 
      instructions, 
      opening_hours, 
      open_on_weekends,
    } = req.body;

    const requestImages = req.files as Express.Multer.File[];
    const images = requestImages.map(image => {
      return {
        path: image.filename
      };
    });

    const repo = getRepository(Orphanages);
    const orphanage = repo.create({
      name, 
      latitude, 
      longitude, 
      about, 
      instructions, 
      opening_hours, 
      open_on_weekends,
      images
    });

    await repo.save(orphanage);

    return res.status(201).json(orphanage);
  }
}

export default new OrphanagesController;