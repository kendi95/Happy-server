import express from 'express';
import multer from 'multer';
import {join} from 'path';

import {orphanageValidation} from '../middleware/validation';
import uploadConfig from '../config/upload';
import OrphanagesController from '../controllers/OrphanagesController';

const router = express.Router();

router.use('/uploads', express.static(join(__dirname, '..', '..', 'uploads')));

router.get('/orphanages', OrphanagesController.index);
router.get('/orphanages/:id', OrphanagesController.show);
router.post('/orphanages', multer(uploadConfig).array('files'), orphanageValidation, OrphanagesController.create);

export default router;