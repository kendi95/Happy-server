import express from 'express';

import SessionsController from '../controllers/SessionsController';
import { sessionValidation } from '../middleware/session.validation';

const router = express.Router();

router.post('', sessionValidation, SessionsController.create);

export default router;