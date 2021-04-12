import express from 'express';
import {join} from 'path';

import orphanagesRoutes from './orphanages.routes';
import usersRoutes from './users.routes';
import sessionsRoutes from './sessions.routes';
import imagesRoutes from './images.routes';
import recoveryRoutes from './recover.routes';
import { authValidation } from '../middleware/auth.validation';

const router = express.Router();

router.use('/uploads', express.static(join(__dirname, '..', '..', 'uploads')));

router.use('/orphanages', orphanagesRoutes);
router.use('/sessions', sessionsRoutes);
router.use('/users', usersRoutes);
router.use('/recover', recoveryRoutes);

router.use(authValidation);

router.use('/images', imagesRoutes);

export default router;