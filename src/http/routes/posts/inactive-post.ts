import { db } from '@database/client'
import { Request, Response } from 'express'

interface Params {
  postId: string
}

export async function inactivatePost(
  request: Request<Params>,
  response: Response,
): Promise<void> {
  const { postId } = request.params

  const post = db.findUnique('posts', { id: postId })

  if (!post) {
    response.status(400).json({
      result: 'error',
      message: 'post not found',
    })

    return
  }

  db.update('posts', postId, {
    active: false,
    updateAt: new Date(),
  })

  response.json({
    result: 'success',
    message: 'post inactivated',
  })
}
