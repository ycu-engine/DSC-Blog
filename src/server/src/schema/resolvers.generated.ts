/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.generated'
import { MemberUser } from './user/resolvers/MemberUser'
import { NormalUser } from './user/resolvers/NormalUser'
import { Post } from './post/resolvers/Post'
import { hello as Query_hello } from './base/resolvers/Query/hello'
import { samplePosts as Query_samplePosts } from './post/resolvers/Query/samplePosts'
export const resolvers: Resolvers = {
  Query: { hello: Query_hello, samplePosts: Query_samplePosts },

  MemberUser: MemberUser,
  NormalUser: NormalUser,
  Post: Post,
}
