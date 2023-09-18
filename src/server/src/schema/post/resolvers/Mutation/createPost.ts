import { authenticationError } from '../../../base/resolvers/AuthenticationError'
import type { MutationResolvers } from '../../../types.generated'

export const createPost: NonNullable<MutationResolvers['createPost']> = async (
  _parent,
  { input },
  { prisma, auth },
) => {
  if (!auth?.userId) return authenticationError

  const post = await prisma.post.create({
    data: {
      ...input,
      author: {
        connect: { id: auth.userId },
      },
    },
  })

  return {
    __typename: 'CreatePostSuccess',
    post,
  }
}
