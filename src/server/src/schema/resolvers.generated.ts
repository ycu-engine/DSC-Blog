/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { AuthenticationError } from './base/resolvers/AuthenticationError';
import    { CreatePostSuccess } from './post/resolvers/CreatePostSuccess';
import    { MemberUser } from './user/resolvers/MemberUser';
import    { createPost as Mutation_createPost } from './post/resolvers/Mutation/createPost';
import    { NormalUser } from './user/resolvers/NormalUser';
import    { Post } from './post/resolvers/Post';
import    { hello as Query_hello } from './base/resolvers/Query/hello';
    export const resolvers: Resolvers = {
      Query: { hello: Query_hello },
      Mutation: { createPost: Mutation_createPost },
      
      AuthenticationError: AuthenticationError,
CreatePostSuccess: CreatePostSuccess,
MemberUser: MemberUser,
NormalUser: NormalUser,
Post: Post
    }