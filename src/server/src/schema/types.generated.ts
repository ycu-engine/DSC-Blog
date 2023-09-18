import { GraphQLResolveInfo } from 'graphql';
import { MemberUserMapper, NormalUserMapper } from './user/schema.mappers';
import { PostMapper } from './post/schema.mappers';
import { GraphQLContext } from '../context';
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string | number; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AuthenticationError = Error & {
  __typename?: 'AuthenticationError';
  message: Scalars['String']['output'];
};

export type CreatePostInput = {
  content: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreatePostResult = AuthenticationError | CreatePostSuccess;

export type CreatePostSuccess = {
  __typename?: 'CreatePostSuccess';
  post: Post;
};

export type Error = {
  message: Scalars['String']['output'];
};

export type MemberUser = Node & User & {
  __typename?: 'MemberUser';
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost: CreatePostResult;
};


export type MutationcreatePostArgs = {
  input: CreatePostInput;
};

export type Node = {
  id: Scalars['ID']['output'];
};

export type NormalUser = Node & User & {
  __typename?: 'NormalUser';
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Post = Node & {
  __typename?: 'Post';
  author: MemberUser;
  content: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type PostConnection = {
  __typename?: 'PostConnection';
  edges: Array<PostEdge>;
  nodes: Array<Post>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type PostEdge = {
  __typename?: 'PostEdge';
  cursor: Scalars['String']['output'];
  node: Post;
};

export type PostsResult = AuthenticationError | PostConnection;

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String']['output'];
  posts: PostsResult;
};


export type QuerypostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type User = {
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type ResolversUnionTypes<RefType extends Record<string, unknown>> = {
  CreatePostResult: ( AuthenticationError & { __typename: 'AuthenticationError' } ) | ( Omit<CreatePostSuccess, 'post'> & { post: RefType['Post'] } & { __typename: 'CreatePostSuccess' } );
  PostsResult: ( AuthenticationError & { __typename: 'AuthenticationError' } ) | ( Omit<PostConnection, 'edges' | 'nodes'> & { edges: Array<RefType['PostEdge']>, nodes: Array<RefType['Post']> } & { __typename: 'PostConnection' } );
};

/** Mapping of interface types */
export type ResolversInterfaceTypes<RefType extends Record<string, unknown>> = {
  Error: ( AuthenticationError & { __typename: 'AuthenticationError' } );
  Node: ( MemberUserMapper & { __typename: 'MemberUser' } ) | ( NormalUserMapper & { __typename: 'NormalUser' } ) | ( PostMapper & { __typename: 'Post' } );
  User: ( MemberUserMapper & { __typename: 'MemberUser' } ) | ( NormalUserMapper & { __typename: 'NormalUser' } );
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AuthenticationError: ResolverTypeWrapper<AuthenticationError>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  CreatePostInput: CreatePostInput;
  CreatePostResult: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['CreatePostResult']>;
  CreatePostSuccess: ResolverTypeWrapper<Omit<CreatePostSuccess, 'post'> & { post: ResolversTypes['Post'] }>;
  Error: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Error']>;
  MemberUser: ResolverTypeWrapper<MemberUserMapper>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Node: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Node']>;
  NormalUser: ResolverTypeWrapper<NormalUserMapper>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Post: ResolverTypeWrapper<PostMapper>;
  PostConnection: ResolverTypeWrapper<Omit<PostConnection, 'edges' | 'nodes'> & { edges: Array<ResolversTypes['PostEdge']>, nodes: Array<ResolversTypes['Post']> }>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  PostEdge: ResolverTypeWrapper<Omit<PostEdge, 'node'> & { node: ResolversTypes['Post'] }>;
  PostsResult: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['PostsResult']>;
  Query: ResolverTypeWrapper<{}>;
  User: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['User']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AuthenticationError: AuthenticationError;
  String: Scalars['String']['output'];
  CreatePostInput: CreatePostInput;
  CreatePostResult: ResolversUnionTypes<ResolversParentTypes>['CreatePostResult'];
  CreatePostSuccess: Omit<CreatePostSuccess, 'post'> & { post: ResolversParentTypes['Post'] };
  Error: ResolversInterfaceTypes<ResolversParentTypes>['Error'];
  MemberUser: MemberUserMapper;
  ID: Scalars['ID']['output'];
  Mutation: {};
  Node: ResolversInterfaceTypes<ResolversParentTypes>['Node'];
  NormalUser: NormalUserMapper;
  PageInfo: PageInfo;
  Boolean: Scalars['Boolean']['output'];
  Post: PostMapper;
  PostConnection: Omit<PostConnection, 'edges' | 'nodes'> & { edges: Array<ResolversParentTypes['PostEdge']>, nodes: Array<ResolversParentTypes['Post']> };
  Int: Scalars['Int']['output'];
  PostEdge: Omit<PostEdge, 'node'> & { node: ResolversParentTypes['Post'] };
  PostsResult: ResolversUnionTypes<ResolversParentTypes>['PostsResult'];
  Query: {};
  User: ResolversInterfaceTypes<ResolversParentTypes>['User'];
};

export type AuthenticationErrorResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['AuthenticationError'] = ResolversParentTypes['AuthenticationError']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreatePostResultResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['CreatePostResult'] = ResolversParentTypes['CreatePostResult']> = {
  __resolveType?: TypeResolveFn<'AuthenticationError' | 'CreatePostSuccess', ParentType, ContextType>;
};

export type CreatePostSuccessResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['CreatePostSuccess'] = ResolversParentTypes['CreatePostSuccess']> = {
  post?: Resolver<ResolversTypes['Post'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ErrorResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Error'] = ResolversParentTypes['Error']> = {
  __resolveType?: TypeResolveFn<'AuthenticationError', ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type MemberUserResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['MemberUser'] = ResolversParentTypes['MemberUser']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fullName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createPost?: Resolver<ResolversTypes['CreatePostResult'], ParentType, ContextType, RequireFields<MutationcreatePostArgs, 'input'>>;
};

export type NodeResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = {
  __resolveType?: TypeResolveFn<'MemberUser' | 'NormalUser' | 'Post', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type NormalUserResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['NormalUser'] = ResolversParentTypes['NormalUser']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fullName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageInfoResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = {
  author?: Resolver<ResolversTypes['MemberUser'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostConnectionResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['PostConnection'] = ResolversParentTypes['PostConnection']> = {
  edges?: Resolver<Array<ResolversTypes['PostEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Post']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostEdgeResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['PostEdge'] = ResolversParentTypes['PostEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Post'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostsResultResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['PostsResult'] = ResolversParentTypes['PostsResult']> = {
  __resolveType?: TypeResolveFn<'AuthenticationError' | 'PostConnection', ParentType, ContextType>;
};

export type QueryResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  hello?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  posts?: Resolver<ResolversTypes['PostsResult'], ParentType, ContextType, Partial<QuerypostsArgs>>;
};

export type UserResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  __resolveType?: TypeResolveFn<'MemberUser' | 'NormalUser', ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fullName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type Resolvers<ContextType = GraphQLContext> = {
  AuthenticationError?: AuthenticationErrorResolvers<ContextType>;
  CreatePostResult?: CreatePostResultResolvers<ContextType>;
  CreatePostSuccess?: CreatePostSuccessResolvers<ContextType>;
  Error?: ErrorResolvers<ContextType>;
  MemberUser?: MemberUserResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Node?: NodeResolvers<ContextType>;
  NormalUser?: NormalUserResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  PostConnection?: PostConnectionResolvers<ContextType>;
  PostEdge?: PostEdgeResolvers<ContextType>;
  PostsResult?: PostsResultResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

