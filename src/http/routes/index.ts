import { Router } from 'express'

import { authRouter } from './auth'
import { postRouter } from './posts'
import { userRouter } from './students'

const router = Router()

// app.get('/', (req, res) => {})

router.use('/authenticate', authRouter)
router.use('/student', userRouter)
router.use('/post', postRouter)

export { router }
