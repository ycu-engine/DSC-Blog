import type { QueryResolvers } from '../../../types.generated'

export const posts: NonNullable<QueryResolvers['posts']> = async (_parent, _arg, _ctx) => {
  throw new Error('TODO!')
}
