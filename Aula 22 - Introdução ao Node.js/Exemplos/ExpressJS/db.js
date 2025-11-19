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

export async function getCliente(id) {
    const [rows] = await connection.execute('SELECT * FROM cliente where id = ?', [id]);
    return rows;
}

export async function removeCliente(id) {
    const [results] = await connection.execute('DELETE FROM cliente where id = ?', [id])
    console.log(results)
    return results;
}

export async function updateCliente(id, cliente) {
    const { nome, email, cpf, data_nascimento } = cliente
    const [results] = await connection.execute('UPDATE cliente SET nome = ?, email = ?, cpf = ?, data_nascimento = ? WHERE id = ?', [nome, email, cpf, data_nascimento, id])
    console.log(results)
    return results;
}

export async function createCliente(cliente) {
    const { nome, email, cpf, data_nascimento } = cliente
    const [results] = await connection.execute('INSERT INTO cliente (nome, email, cpf, data_nascimento) values (?, ?, ?, ?)', [nome, email, cpf, data_nascimento ])
    return results.insertId
}