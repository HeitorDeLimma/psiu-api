import { Request, Response } from 'express'

interface Body {
  ra: string
  name: string
  birthdate: string
}

export async function createStudent(
  req: Request,
  res: Response,
): Promise<void> {
  const { ra, name, birthdate } = req.body as Body

  res.json({
    data: {
      ra,
      name,
      birthdate,
    },
  })
}
