import { createSchema, createYoga } from 'graphql-yoga'
import { NextApiRequest, NextApiResponse, NextConfig } from 'next'

/**
 * ボディパーサーを無効化する
 */
export const config: NextConfig = {
  api: {
    bodyParser: false,
  },
}

const schema = createSchema({
  resolvers: {
    Query: {
      hello: () => 'world',
    },
  },
  typeDefs: /* GraphQL */ `
    type Query {
      hello: String!
    }
  `,
})

export default createYoga<{
  req: NextApiRequest
  res: NextApiResponse
}>({
  graphqlEndpoint: '/api/graphql',
  schema: schema as any,
})
