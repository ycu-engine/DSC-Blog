import { createSchema } from 'graphql-yoga'
import { resolvers } from './schemas/resolvers.generated'
import { typeDefs } from './schemas/typeDefs.generated'

/**
 * GraphQLのスキーマ
 */
export const schema = createSchema({
  resolvers,
  typeDefs,
})
