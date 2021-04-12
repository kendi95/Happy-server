import express from 'express';
import multer from 'multer';

import OrphanagesController from '../controllers/OrphanagesController';

import { orphanageValidation } from '../middleware/validation';
import uploadConfig from '../config/upload';
import { authValidation } from '../middleware/auth.validation';

const router = express.Router();

router.get('', authValidation, OrphanagesController.index);
router.get('/:id', authValidation, OrphanagesController.show);
router.put('/:id', authValidation, OrphanagesController.update);
router.patch('/:id', authValidation, OrphanagesController.update);
router.delete('/:id', authValidation, OrphanagesController.destroy);
router.post('', multer(uploadConfig).array('files'), orphanageValidation, OrphanagesController.create);

export default router;