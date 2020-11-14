import express from 'express';

import UsersController from '../controllers/UsersController';

import { userValidation } from '../middleware/user.validation';

const router = express.Router();

router.post('', userValidation, UsersController.create);

export default router;