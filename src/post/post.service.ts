import { connection } from '../app/database/mysql';
import _ from 'lodash';
import { PostModel } from './post.model';

// export const getPosts = () => {
//   const data = [
//     {
//       content: '123',
//     },
//     {
//       content: '456',
//     },
//     {
//       content: '789',
//     },
//   ];
//   return data;
// };

export const getPosts = async () => {
  // const statement = `SELECT * FROM post`;
  const statement = `SELECT post.id, post.title, post.content, JSON_OBJECT('id', user.id, 'name', user.name) as user
  FROM post LEFT JOIN user ON user.id = post.userId`;

  const [data] = await connection.promise().query(statement);
  console.log(data);
  return data;
};

export const updatePost = async (postId: number, post: PostModel) => {
  const statement = `UPDATE post SET ? WHERE id = ?`;
  const [data] = await connection.promise().query(statement, [post, postId]);
  return data;
};

export const createPost = async (post: PostModel) => {
  const statement = `INSERT INTO post SET ?`;

  const [data] = await connection.promise().query(statement, post);
  console.log(data);
  return data;
};


export const deletePost = async (postId: number) => {
  const statement = `DELETE from post WHERE id = ?`;

  const [data] = await connection.promise().query(statement, postId);
  console.log(data);
  return data;
};
