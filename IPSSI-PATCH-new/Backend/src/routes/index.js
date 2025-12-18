import { Router } from 'express';
import { getUsers, postUser, populate } from '../controllers/userController.js';
import { getComments, postComment } from '../controllers/commentController.js';

const router = Router();

router.get('/users', getUsers);
router.post('/users', postUser);
router.get('/users/populate', populate);

router.get('/comments', getComments);
router.post('/comments', postComment);

export default router;

