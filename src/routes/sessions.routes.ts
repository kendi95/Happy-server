import express from 'express';

import SessionsController from '../controllers/SessionsController';

const router = express.Router();

router.post('', SessionsController.create);

export default router;