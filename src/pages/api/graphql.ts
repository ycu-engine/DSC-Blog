import { createYoga } from 'graphql-yoga'
import { NextApiRequest, NextApiResponse, NextConfig } from 'next'
import { schema } from '@/server/src/yoga'

/**
 * ボディパーサーを無効化する
 */
export const config: NextConfig = {
  api: {
    bodyParser: false,
  },
}

export default createYoga<{
  req: NextApiRequest
  res: NextApiResponse
}>({
  graphqlEndpoint: '/api/graphql',
  schema: schema as any,
})
