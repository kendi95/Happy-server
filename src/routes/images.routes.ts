import express from 'express';
import multer from 'multer';

import ImagesController from '../controllers/ImagesController';

import uploadConfig from '../config/upload';

const router = express.Router();

router.post('', multer(uploadConfig).single('files'), ImagesController.create);
router.delete('/:id', ImagesController.destroy);

export default router;