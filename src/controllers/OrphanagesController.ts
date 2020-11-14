import {Request, Response} from 'express';

import {filesToImages} from '../services/Images/FilesToImagesService';
import {createOrphanage} from '../services/Orphanages/CreateOrphanageService';
import {showOrphanageById} from '../services/Orphanages/ShowOrphanageByIdService';
import {listOrphanage} from '../services/Orphanages/ListOrphanageService';
import {updateOrphanage} from '../services/Orphanages/UpdateOrphanageService';
import {destroyOrphanage} from '../services/Orphanages/DestroyOrphanageService';

class OrphanagesController {
  async index(req: Request, res: Response) {
    const orphanages = await listOrphanage();
    return res.status(200).json(orphanages);
  }

  async show(req: Request, res: Response) {
    const {id} = req.params;
    const orphanage = await showOrphanageById(Number(id));
    return res.status(200).json(orphanage);
  }

  async create(req: Request, res: Response) {
    const images = filesToImages(req);
    const orphanage = await createOrphanage({
      ...req.body,
      images
    });
    return res.status(201).json(orphanage);
  }

  async update(req: Request, res: Response) {
    const {id} = req.params
    const orphanage = await updateOrphanage(Number(id),{
      ...req.body
    })
    return res.status(200).json(orphanage);
  }

  async destroy(req: Request, res: Response) {
    const {id} = req.params
    await destroyOrphanage(Number(id));
    return res.status(204).send();
  }
}

export default new OrphanagesController;