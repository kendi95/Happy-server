import { Request, Response } from "express";

import {createUser} from '../services/Users/CreateUserService';

class UsersController {

  async create(req: Request, res: Response) {
    const user = await createUser({
      ...req.body
    });
    return res.status(201).json(user);
  }

}

export default new UsersController;