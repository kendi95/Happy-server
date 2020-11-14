import { Request, Response } from "express";

import {filesToImage} from '../services/Images/FilesToImageService';
import {createImage} from '../services/Images/CreateImageService';
import {destroyImage} from '../services/Images/DestroyImageService';

class ImagesController {
  async create(req: Request, res: Response) {
    try {
      const image = filesToImage(req);
      const data = await createImage(image);
      return res.status(201).json(data);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async destroy(req: Request, res: Response) {
    try {
      const {id} = req.params;
      await destroyImage(Number(id));
      return res.status(204).send();
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

export default new ImagesController;