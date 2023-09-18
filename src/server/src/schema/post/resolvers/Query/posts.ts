import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection'

import { toConnectionArgs } from '@/server/src/utils/toConnectionArgs'
import type { QueryResolvers } from '../../../types.generated'

export const posts: NonNullable<QueryResolvers['posts']> = async (_parent, args, { prisma }) => {
  const result = await findManyCursorConnection(
    (args_) => prisma.post.findMany({ ...args_ }),
    () => prisma.post.count(),
    toConnectionArgs(args),
  )

  return {
    __typename: 'PostConnection',
    ...result,
  }
}
