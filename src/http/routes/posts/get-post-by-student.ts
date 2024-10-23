import { db } from '@database/client'
import { Request, Response } from 'express'

interface Params {
  studentId: string
}

export async function getPostByStudent(
  request: Request<Params>,
  response: Response,
): Promise<void> {
  const { studentId } = request.params

  const posts = db.findMany('posts', { active: true, studentId })

  const postsResponse = posts.map((post) => {
    const comments = db.findMany('comments', { postId: post.id, active: true })
    const reactions = db.findMany('posts_reactions', { postId: post.id })

    const summaryComments = comments.map((comment) => ({
      id: comment.id,
      postId: comment.postId,
      content: comment.content,
      contentedAt: comment.comentedAt,
      updatedAt: comment.updatedAt,
    }))

    const summaryReactions = reactions.map((reaction) => ({
      id: reaction.id,
      content: reaction.content,
      publishedAt: reaction.publishedAt,
      updatedAt: reaction.updatedAt,
    }))

    return {
      ...summaryReactions,
      comments: summaryComments,
      reactions: summaryReactions,
    }
  })

  response.json({
    result: 'Success',
    data: postsResponse,
  })
}
