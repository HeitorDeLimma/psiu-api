import express from 'express'

import { router } from './routes'

const app = express()

app.use(express.json())

app.use(router) // Registra a nota da aplicação

app.listen(3333, () => console.log('🚀 Servidor HTTP está rodando!'))
