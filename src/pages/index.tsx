import { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Heading } from '@/components/ui/heading'

import { graphql } from '@/gql'
import { HomePageQuery } from '@/gql/graphql'
import { createApolloClient } from '@/lib/apollo/cllient'

const HomePageQueryDocument = graphql(/* GraphQL */ `
  query HomePage {
    posts {
      ... on PostConnection {
        nodes {
          id
          title
          author {
            fullName
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
        totalCount
      }
    }
  }
`)

type PageProps = {
  posts: Array<{
    __typename?: 'Post'
    id: string
    title: string
    author: {
      __typename?: 'MemberUser'
      fullName: string
    }
  }>
}

/**
 * ホーム画面
 */
const Home: NextPage<PageProps> = ({ posts }) => (
  <main className="flex min-h-screen flex-col gap-16 p-8">
    <Heading variant="title" className="italic">
      New Posts
    </Heading>
    <div className="flex gap-4">
      {posts ? (
        posts.map((post) => (
          <Link href={`/posts/${post.id}`} key={post.id} className="duration-200 hover:opacity-90">
            <div key={post.id} className="flex flex-col gap-4">
              <Image
                src={`https://source.unsplash.com/random/800x600?sig=${post.id}`}
                alt="Cover Image"
                width={800}
                height={600}
                className="rounded-lg"
              />
              <p className="text-lg">・{post.author.fullName}</p>
              <p className="text-2xl font-bold">{post.title}</p>
            </div>
          </Link>
        ))
      ) : (
        <p>記事がありません</p>
      )}
    </div>
  </main>
)

/**
 * SSG 記事の内容を取得する
 */
export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const client = createApolloClient()
  const { data } = await client.query<HomePageQuery>({
    query: HomePageQueryDocument,
  })

  if (data.posts.__typename === 'PostConnection') {
    return {
      props: {
        posts: data.posts.nodes,
      },
    }
  }

  return {
    props: {
      posts: [],
    },
  }
}

export default Home
