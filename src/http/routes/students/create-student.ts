import { db } from '@database/client'
import { generatePassword } from '@utils/generate-password'
import { randomUUID } from 'crypto'
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

  const studentByRa = db.select('students', { ra })

  if (studentByRa.length) {
    res.status(400).json({
      result: 'error',
      message: `Students register ${ra} already exitis`,
    })

    return
  }

  const student = {
    id: randomUUID(),
    ra,
    name,
    password: generatePassword(),
    birthdate: new Date(birthdate),
    active: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  db.insert('students', student)

  res.status(201).json({
    result: 'success',
    message: 'Student profile created',
  })
}
