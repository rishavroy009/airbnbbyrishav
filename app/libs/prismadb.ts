//multiple instances of prisma client will not be created due to this code otherwise nextjs 13 leads to create multiple 
//instances of prisma client, This is referring to same prisma client globally

import { PrismaClient } from "@prisma/client"

declare global {
  var prisma: PrismaClient | undefined
}

const client = globalThis.prisma || new PrismaClient()
if (process.env.NODE_ENV !== "production") globalThis.prisma = client

export default client