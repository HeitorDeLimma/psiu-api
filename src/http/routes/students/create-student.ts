import { randomUUID } from 'crypto'
import { Request, Response } from 'express'

import { generatePassword } from '../../../../src/utils/generate-password'
import { Database } from '../../../database'

const database = new Database()

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

  const studentByRa = database.select('students', { ra })

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
  }

  database.insert('students', student)

  res.status(201).json({
    result: 'success',
    message: 'Student profile created',
  })
}
