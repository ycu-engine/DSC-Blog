/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.generated'
import { MemberUser } from './user/resolvers/MemberUser'
import { NormalUser } from './user/resolvers/NormalUser'
import { PageInfo } from './base/resolvers/PageInfo'
import { Post } from './post/resolvers/Post'
import { PostConnection } from './post/resolvers/PostConnection'
import { PostEdge } from './post/resolvers/PostEdge'
import { posts as Query_posts } from './post/resolvers/Query/posts'
export const resolvers: Resolvers = {
  Query: { posts: Query_posts },

  MemberUser: MemberUser,
  NormalUser: NormalUser,
  PageInfo: PageInfo,
  Post: Post,
  PostConnection: PostConnection,
  PostEdge: PostEdge,
}
