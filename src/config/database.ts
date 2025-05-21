import mysql from 'mysql2/promise';
import 'dotenv/config';

const Connection = async () => {
    const connection = await mysql.createConnection({
        port: 3306,
        host: process.env.HOST_NAME,
        user: process.env.USER_NAME,
        password: process.env.USER_PASS,
        database: process.env.DATABASE,
    });

    return connection;
}

export default Connection;