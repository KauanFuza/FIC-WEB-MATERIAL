import express from 'express'
import { getClientes } from './db.js';
const app = express()

app.use((req, res, next) => { 
    console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
    next(); 
})

app.use(express.static('public'))

app.use(express.json())

app.get('/clientes', async (req, res) => {
    const clientes = await getClientes()
    res.status(200).json(clientes)
})

app.get('/clientes/:id', (req, res) => {
    const id = req.params.id;
    res.send(`ID ${id}`)
})

app.post('/clientes', (req, res) => {
    const { nome, data_nascimento, email, cpf } = req.body
    res.status(201).send({ "message": `Criado o usuário ${nome}` })
})

app.listen(3000, () => {
    console.log('Server running http://localhost:3000')
})