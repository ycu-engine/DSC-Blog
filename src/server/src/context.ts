import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

/**
 * GraphQL context
 */
export type GraphQLContext = {
  prisma: PrismaClient
  auth?: {
    userId: string
  }
}

/**
 * Create GraphQL context
 */
export function createContext(): GraphQLContext {
  return {
    auth: {
      userId: 'test',
    },
    prisma,
  }
}
