import { authentication } from '@http/middlewares/auth'
import { Router } from 'express'

import { createPost } from './create-post'
import { getPost } from './get-post'
import { getPostsByStudent } from './get-posts-by-student'
import { inactivatePost } from './inactive-post'
import { updatePost } from './update-post'

const postRouter = Router()

postRouter.use(authentication)

postRouter.post('/', createPost)
postRouter.get('/', getPost)
postRouter.get('/student/:studentId', getPostsByStudent)
postRouter.put('/:postId', updatePost)
postRouter.delete('/:postId', inactivatePost)

export { postRouter }
