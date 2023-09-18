/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { AuthenticationError } from './base/resolvers/AuthenticationError';
import    { CreatePostSuccess } from './post/resolvers/CreatePostSuccess';
import    { MemberUser } from './user/resolvers/MemberUser';
import    { createPost as Mutation_createPost } from './post/resolvers/Mutation/createPost';
import    { NormalUser } from './user/resolvers/NormalUser';
import    { PageInfo } from './base/resolvers/PageInfo';
import    { Post } from './post/resolvers/Post';
import    { PostConnection } from './post/resolvers/PostConnection';
import    { PostEdge } from './post/resolvers/PostEdge';
import    { hello as Query_hello } from './base/resolvers/Query/hello';
import    { posts as Query_posts } from './post/resolvers/Query/posts';
    export const resolvers: Resolvers = {
      Query: { hello: Query_hello,posts: Query_posts },
      Mutation: { createPost: Mutation_createPost },
      
      AuthenticationError: AuthenticationError,
CreatePostSuccess: CreatePostSuccess,
MemberUser: MemberUser,
NormalUser: NormalUser,
PageInfo: PageInfo,
Post: Post,
PostConnection: PostConnection,
PostEdge: PostEdge
    }