import type { PostResolvers } from '../../types.generated'

export const Post: PostResolvers = {
  author: (parent, _args, { prisma }) =>
    prisma.user.findUniqueOrThrow({
      where: {
        id: parent.authorId,
      },
    }),
}
