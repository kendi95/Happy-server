import { Request, Response } from "express";

import {createSession} from '../services/Sessions/CreateSessionService';

class SessionsController {
  async create(req: Request, res: Response) {
    try {
      const data = await createSession(req.body);
      return res.status(200).json(data);
    } catch (error) {
      return res.status(400).json({ errors: error.message });
    }
  }
}

export default new SessionsController;