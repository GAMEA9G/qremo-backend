import { PrismaClient } from '@prisma/client'
import { PrismaLibSql } from '@prisma/adapter-libsql'

const adapter = new PrismaLibSql({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
})

// Cast to 'any' or the specific internal type if the IDE is being stubborn
const prisma = new PrismaClient({ adapter } as any) 

export default prisma
