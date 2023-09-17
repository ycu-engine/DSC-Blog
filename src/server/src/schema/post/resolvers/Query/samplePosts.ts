import type { Post, QueryResolvers, User } from '../../../types.generated'

export const samplePosts: NonNullable<QueryResolvers['samplePosts']> = async () => {
  const sampleUser: User = {
    email: 'example@gmail.com',
    firstName: 'example',
    fullName: 'example',
    id: 'example',
    lastName: 'example',
  }
  const post: Post = {
    author: sampleUser,
    body: 'example',
    id: 'example',
    title: 'example',
  }

  return [post, post, post]
}
