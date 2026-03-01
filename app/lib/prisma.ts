// Import needed packages
import { PrismaClient } from '@prisma/client'
import { PrismaLibSql } from '@prisma/adapter-libsql'
// You can alternatively use the web version of the client if you're running in
// a constrained environment where the standard libsql client doesn't work:
// import { PrismaLibSql } from '@prisma/adapter-libsql/web'

// Setup
const connectionString = `${process.env.TURSO_DATABASE_URL}`
const authToken = `${process.env.TURSO_AUTH_TOKEN}`

// Init prisma client
const adapter = new PrismaLibSql({
  url: connectionString,
  authToken,
})
const prisma = new PrismaClient({ adapter })
export default prisma