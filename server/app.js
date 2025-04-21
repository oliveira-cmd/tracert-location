const express = require('express')
const cors = require('cors')
const app = express()
const tracertRoute = require('./route/tracert')
app.use(express.json())
app.use(cors())

app.use('/tracert', tracertRoute);

app.listen(5555, () => {
    console.log('Servidor rodando na porta 5555')
})