import { authentication } from '@http/middlewares/auth'
import { Router } from 'express'

import { createPost } from './create-post'
import { getPostByStudent } from './get-post-by-student'
import { getPosts } from './get-posts'
import { inactivatePost } from './inactivate-post'
import { updatePost } from './update-post'

const postRouter = Router()

postRouter.use(authentication)

postRouter.post('/', createPost)
postRouter.get('/', getPosts)
postRouter.get('/student/:studentId', getPostByStudent)
postRouter.put('/:postId', updatePost)
postRouter.delete('/:postId', inactivatePost)

export { postRouter }
