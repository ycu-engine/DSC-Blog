import { ApolloClient, InMemoryCache } from '@apollo/client'

/**
 * Apollo Clientの生成
 */
export const createApolloClient = () =>
  new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:3000/api/graphql',
  })

/**
 * Apollo Clientのインスタンス
 */
export const client = createApolloClient()
