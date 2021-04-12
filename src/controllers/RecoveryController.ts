import { Request, Response } from 'express';

import { createRecovery } from '../services/Recovery/CreateRecoveryService';

class RecoveryController {
  async create(req: Request, res: Response) {
    try {
      await createRecovery(req.body);
      return res.status(200).send();
    } catch (error) {
      return res.status(400).json({ errors: error.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      // criar service de atualização da senha, e do token usado
    } catch (error) {
      return res.status(400).json({ errors: error.message });
    }
  }
}

export default new RecoveryController;