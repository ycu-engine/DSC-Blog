import { Html, Head, Main, NextScript } from 'next/document'

/**
 * ページレンダリングの<html>と<body>タグを更新することができる
 * @see https://nextjs.org/docs/pages/building-your-application/routing/custom-document
 */
export default function Document() {
  return (
    <Html lang="ja">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
