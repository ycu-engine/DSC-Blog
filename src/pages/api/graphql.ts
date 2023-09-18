import { createYoga } from 'graphql-yoga'
import { NextApiRequest, NextApiResponse, NextConfig } from 'next'
import { schema } from '@/server/src/yoga'
import { env } from '@/env.mjs'
import { createContext } from '@/server/src/context'

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
  context: createContext,
  // TODO: 本番環境ではCORSを許可するオリジンを指定する
  cors: {
    credentials: true,
    origin: env.NODE_ENV === 'production' ? 'https://example.com' : '*',
  },

  graphqlEndpoint: '/api/graphql',
  schema: schema as any,
})
