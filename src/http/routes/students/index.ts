import { authentication } from '@http/middlewares/auth'
import { Router } from 'express'

import { createStudent } from './create-student'
import { getStudents } from './get-students'
import { inactivateStudent } from './inactivate-student'
import { updateStudents } from './update-students'

const userRouter = Router()

userRouter.post('/', createStudent)

userRouter.use(authentication)

userRouter.get('/', getStudents)
userRouter.put('/', updateStudents)
userRouter.delete('/', inactivateStudent)

export { userRouter }
