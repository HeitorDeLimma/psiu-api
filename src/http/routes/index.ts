import { Router } from 'express'

import { userRouter } from './students'

const router = Router()

// app.get('/', (req, res) => {})

router.use('/student', userRouter)

export { router }
