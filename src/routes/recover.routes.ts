import express from 'express';

import RecoveryController from '../controllers/RecoveryController';
import { emailValidation, passwordValidation } from '../middleware/recover.validation';
import { tokenCodeValidation } from '../middleware/token-code.validation';

const router = express.Router();

router.post('/check-email', emailValidation, RecoveryController.create);
router.put(
  '/recover-password', 
  passwordValidation, 
  tokenCodeValidation,
  RecoveryController.update
)

export default router;