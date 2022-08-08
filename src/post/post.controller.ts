import e, { Request, Response, NextFunction, response } from 'express';
// import { getPosts } from './post.service';

import _ from 'lodash';
import { createPost, deletePost, getPosts, updatePost } from './post.service';

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
    console.log(error);
    next(error);
  }

  // tryAndCatch(next, async ()=> {
  //   const posts = await getPosts();
  //   response.send(posts);
  // })
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
    console.log(error)
    next(error);
  }
};

export const destory = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const { postId } = request.params;

  try {
    const data = await deletePost(parseInt(postId, 10));
    response.send(data);
  } catch (error) {
    console.log(error)
    next(error);
  }
};

function tryAndCatch(next: NextFunction, block: () => any) {
  try {
    block();
  } catch (error) {
    next(error);
    console.log(error);
  }
}
