import { Request, Response } from "express";

import {createUser} from '../services/Users/CreateUserService';

class UsersController {

  async create(req: Request, res: Response) {
    try {
      const user = await createUser({
        ...req.body
      });
      return res.status(201).json(user);
    } catch (error) {
      return res.status(400).json({errors: error.message});
    }
  }

}

export default new UsersController;