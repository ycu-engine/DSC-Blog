import { NextPage } from 'next'
import React from 'react'
import { markPlaintext, markReact } from '@/lib/markdown/utils'

/**
 * Markdown Test Page
 * @returns Markdown Test Page
 */
const MarkdownTest: NextPage = () => {
  const [markdown, setMarkdown] = React.useState<string>('')
  const [react, setReact] = React.useState<React.ReactElement>()
  const [plainText, setPlainText] = React.useState<string>()
  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = async (e) => {
    setMarkdown(e.target.value)
    markReact(e.target.value).then((element) => setReact(element))
    markPlaintext(e.target.value).then((text) => setPlainText(text))
  }
  return (
    <div className="m-4 flex flex-col gap-2">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css"
        integrity="sha384-Xi8rHCmBmhbuyyhbI88391ZKP2dmfnOl4rT9ZfRI7mLTdk1wblIUnrIq35nqwEvC"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/github-dark.min.css"
      />

      <h1 className="mb-4 self-center">Markdown のテストページ</h1>
      <div className="mb-2">
        <h2>入力</h2>
        <textarea className="w-full border-2" onChange={handleChange} value={markdown} />
      </div>
      <div className="mb-2">
        <h2>Markdown</h2>
        <div>{react}</div>
      </div>
      <div className="mb-2">
        <h2>Plain Text</h2>
        <div>{plainText}</div>
      </div>
    </div>
  )
}

export default MarkdownTest
