import { register, getToken } from '../controllers/auth';
import { updateUser, deleteUser } from '../controllers/user';
import { Request, Response } from 'express';
import middlewareController from '../middleware/user';
import {
  createBlog,
  deleteBlog,
  getBlog,
  updateBlog,
} from '../controllers/blog';

const router = require('express').Router();

router.get('/', (_req: Request, res: Response) => {
  res.send("Let's build a CRUD API!");
});

//auth
router.get('/auth/token', getToken);
router.post('/auth/register', register);

//users
router.put('/users/:userID', middlewareController.verify, updateUser);
router.delete('/users/:userID', middlewareController.verify, deleteUser);

// blog
router.get('/blogs', getBlog);
router.post('/blogs', createBlog);
router.put('/blogs/:blogID', updateBlog);
router.delete('/blogs/:blogID', deleteBlog);

export default router;
