import express from 'express'
const app = express()

app.use((req, res, next) => { 
    console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
    next(); 
})

app.use(express.static('public'))

app.use(express.json())

app.get('/clientes', (req, res) => {
    const clientes = [
        {id: 1, nome: 'José'},
        {id: 2, nome: 'Maria'}
    ]
    res.status(200).json(clientes)
})

app.get('/clientes/:id', (req, res) => {
    const id = req.params.id;
    res.send(`ID ${id}`)
})

app.post('/clientes', (req, res) => {
    const { nome, data_nasc, email } = req.body
    res.status(201).send(`Criado o usuário ${nome}`)
})

app.listen(3000, () => {
    console.log('Server running http://localhost:3000')
})