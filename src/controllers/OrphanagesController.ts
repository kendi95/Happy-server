import {Request, Response} from 'express';

import {filesToImages} from '../services/Images/FilesToImagesService';
import {createOrphanage} from '../services/Orphanages/CreateOrphanageService';
import {showOrphanageById} from '../services/Orphanages/ShowOrphanageByIdService';
import {listOrphanage} from '../services/Orphanages/ListOrphanageService';
import {updateOrphanage} from '../services/Orphanages/UpdateOrphanageService';
import {destroyOrphanage} from '../services/Orphanages/DestroyOrphanageService';
import {updateStatusOrphanage} from '../services/Orphanages/UpdateStatusOrphanageService';

class OrphanagesController {
  async index(req: Request, res: Response) {
    try {
      const { status } = req.query;
      const orphanages = await listOrphanage(status as string);
      return res.status(200).json(orphanages);
    } catch (error) {
      return res.status(400).json({errors: error.message});
    }
  }

  async show(req: Request, res: Response) {
    try {
      const {id} = req.params;
      const orphanage = await showOrphanageById(Number(id));
      return res.status(200).json(orphanage);
    } catch (error) {
      return res.status(400).json({errors: error.message});
    }
  }

  async create(req: Request, res: Response) {
    try {
      const images = filesToImages(req);
      const orphanage = await createOrphanage({
        ...req.body,
        images
      });
      return res.status(201).json(orphanage);
    } catch (error) {
      return res.status(400).json({errors: error.message});
    }
  }

  async update(req: Request, res: Response) {
    try {
      const {id} = req.params;
      const { status } = req.body;

      if (!status) {
        await updateOrphanage(Number(id),{
          ...req.body
        });
        return res.status(204).send();
      }
      await updateStatusOrphanage(Number(id), status);
      return res.status(204).send();
    } catch (error) {
      return res.status(400).json({errors: error.message});
    }
  }

  async destroy(req: Request, res: Response) {
    try {
      const {id} = req.params
      await destroyOrphanage(Number(id));
      return res.status(204).send();
    } catch (error) {
      return res.status(400).json({errors: error.message});
    }
  }
}

export default new OrphanagesController;