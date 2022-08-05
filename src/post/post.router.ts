import express from 'express';
import * as postController from './post.controller';
import { requestUrl } from '../app/app.middleware';

const router = express.Router();

router.get('/posts', requestUrl, postController.index);

router.get('/posts', postController.store);

router.get('/posts/:postId', postController.update);

export default router;
