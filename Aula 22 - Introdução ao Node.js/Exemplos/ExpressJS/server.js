import express from 'express'
import { getClientes, getCliente, createCliente, removeCliente, updateCliente } from './db.js';
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

app.get('/clientes/:id', async (req, res) => {
    const id = req.params.id;
    const cliente = await getCliente(id)
    res.send(cliente)
})

app.post('/clientes', async (req, res) => {
    const cliente = req.body
    const id = await createCliente(cliente)
    res.status(201).send({ "message": `Criado o usuário ${cliente.nome} ID: ${id}` })
})

app.delete('/clientes/:id', async (req, res) => {
    const id = req.params.id
    const results = await removeCliente(id)
    res.status(200).send({"mensagem": `Usuário removido com sucesso.`})
})

app.put('/clientes/:id', async (req, res) => {
    const cliente = req.body
    const id = req.params.id
    const results = await updateCliente(id, cliente)
    res.status(200).send({"mensagem" : `Usuário ${cliente.nome} ID ${id} foi atualizado.`})
})

app.listen(3000, () => {
    console.log('Server running http://localhost:3000')
})