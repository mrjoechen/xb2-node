import { connection } from '../app/database/mysql';
import { UserModel } from './user.model';


export const createUser =async (user: UserModel) => {
    const statement = `INSERT INTO user SET ?`;

    const [data] = await connection.promise().query(statement, user);

    return data;
}

interface GetUserOptions {
    password?: boolean
}

export const getUserByName =async (name:string) => {
    const statement = `SELECT id, name FROM user WHERE name = ?`;

    const [data] = await connection.promise().query(statement, name);

    return data[0];
}