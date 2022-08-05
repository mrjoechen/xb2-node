import { Request, Response, NextFunction, response } from 'express';
// import { getPosts } from './post.service';

import _ from 'lodash';
import { createPost, getPosts, updatePost } from './post.service';

export const index = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  // if (request.headers.authorization !== 'SECRET') {
  //   return next(new Error());
  // }

  try {
    const posts = await getPosts();
    response.send(posts);
  } catch (error) {
    next(error);
  }
};

export const update = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { postId } = request.params;

  const post = _.pick(request.body, ['title', 'content']);

  try {
    const data = await updatePost(parseInt(postId, 10), post);
    response.send(data);
  } catch (error) {
    next(error);
  }
};

export const store = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { title, content } = request.body;
  try {
    const data = await createPost({ title, content });
    response.status(201).send(data);
  } catch (error) {
    next(error);
  }
};
