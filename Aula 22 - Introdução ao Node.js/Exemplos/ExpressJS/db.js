import mysql from 'mysql2/promise';
import 'dotenv/config';

const connection = await mysql.createConnection({
host: process.env.DB_HOST,
user: process.env.DB_USER,
password: process.env.DB_PASSWORD,
database: process.env.DB_DATABASE,
})


export async function getClientes() {
    const [rows] = await connection.execute('SELECT * FROM cliente');
    return rows;
}