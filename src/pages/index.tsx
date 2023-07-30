import { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Heading } from '@/components/ui/heading'
import { Post } from '@/types/Post'

type PageProps = {
  posts: Post[]
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
      {posts.map((post) => (
        <Link href={`/posts/${post.id}`} key={post.id} className="duration-200 hover:opacity-90">
          <div key={post.id} className="flex flex-col gap-4">
            <Image
              src={post.coverImageUri}
              alt="Cover Image"
              width={800}
              height={600}
              className="rounded-lg"
            />
            <p className="text-lg">・{post.author.name}</p>
            <p className="text-2xl font-bold">{post.title}</p>
          </div>
        </Link>
      ))}
    </div>
  </main>
)

/**
 * SSG 記事の内容を取得する
 */
export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const samplePosts: Post[] = [
    {
      id: '1',
      author: {
        id: '1',
        name: 'テスト花子',
        email: 'testHanako@ycu.com',
      },
      title:
        'Cupidatat est veniam ad ut ullamco tempor. Irure et deserunt proident Lorem dolore reprehenderit enim esse cupidatat sit Lorem nisi nostrud Lorem ad.',
      content: '記事の内容',
      createdAt: '2021-01-01T00:00:00.000Z',
      updatedAt: '2021-01-01T00:00:00.000Z',
      coverImageUri: 'https://source.unsplash.com/random/800x800',
      isPublic: true,
    },
    {
      id: '2',
      author: {
        id: '2',
        name: 'テスト太郎',
        email: 'testTarou@ycu.com',
      },
      title:
        'Cupidatat est veniam ad ut ullamco tempor. Irure et deserunt proident Lorem dolore reprehenderit enim esse cupidatat sit Lorem nisi nostrud Lorem ad.',
      content: '記事の内容',
      createdAt: '2021-01-01T00:00:00.000Z',
      updatedAt: '2021-01-01T00:00:00.000Z',
      coverImageUri: 'https://source.unsplash.com/random/800x800',
      isPublic: true,
    },
    {
      id: '3',
      author: {
        id: '3',
        name: 'テスト三郎',
        email: 'ds@ycu.com',
      },
      title:
        'Cupidatat est veniam ad ut ullamco tempor. Irure et deserunt proident Lorem dolore reprehenderit enim esse cupidatat sit Lorem nisi nostrud Lorem ad.',
      content: '記事の内容',
      createdAt: '2021-01-01T00:00:00.000Z',
      updatedAt: '2021-01-01T00:00:00.000Z',
      coverImageUri: 'https://source.unsplash.com/random/800x800',
      isPublic: true,
    },
  ]
  return {
    props: {
      posts: samplePosts,
    },
  }
}

export default Home
