import fs from 'node:fs/promises'
import path from 'node:path'

const databasePath = path.join(__dirname, '../db.json')

/* eslint-disable @typescript-eslint/no-explicit-any */
interface Row {
  id: string | number
  [key: string]: any
}

interface Where {
  [key: string]: any
}

export class Database {
  #database: { [key: string]: Row[] } = {}

  constructor() {
    fs.readFile(databasePath, 'utf-8')
      .then((data) => {
        this.#database = JSON.parse(data)
      })
      .catch(() => {
        this.#persist()
      })
  }

  #persist(): void {
    fs.writeFile(databasePath, JSON.stringify(this.#database))
  }

  // SELECT MANY
  findMany(table: string, search?: Where): Row[] {
    let data = this.#database[table] ?? []

    if (search) {
      data = data.filter((row) => {
        return Object.entries(search).some(([key, value]) => {
          if (typeof row[key] === 'boolean') return row[key] === value

          return row[key]?.includes(value)
        })
      })
    }

    return data
  }

  // SELECT UNIQUE
  findUnique(table: string, search: Where): Row | null {
    const data = this.#database[table] ?? []

    const found = data.find((row) =>
      Object.entries(search).every(([key, value]) => row[key] === value),
    )

    return found ?? null
  }

  // INSERT
  create(table: string, data: Row): Row {
    if (Array.isArray(this.#database[table])) {
      this.#database[table].push(data)
    } else {
      this.#database[table] = [data]
    }

    this.#persist()

    return data
  }

  // UPDATE
  update(
    table: string, // students, posts ...
    id: string | number, // valor aleatório
    data: Omit<Row, 'id'>, // ( name, birthdate, password, active, updateAt )
  ): Row | null {
    const rowIndex = this.#database[table].findIndex((row) => row.id === id)

    if (rowIndex > -1) {
      const found = this.#database[table][rowIndex]

      this.#database[table][rowIndex] = { ...found, ...data }
      this.#persist()

      return { id, ...data }
    }

    return null
  }

  // DELETE
}
