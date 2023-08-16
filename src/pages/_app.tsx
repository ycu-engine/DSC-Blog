import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '@/components/layout/layout'

/**
 * 全てのページはAppコンポーネントで初期化される。共通の処理やProviderを設定する
 * @see https://nextjs.org/docs/pages/building-your-application/routing/custom-app
 */
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
