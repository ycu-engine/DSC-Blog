import { NextPage } from 'next'
import React from 'react'
import { markHtml, markPlainText } from '@/lib/markdown/utils'

/**
 * Markdown Test Page
 * @returns Markdown Test Page
 */
const MarkdownTest: NextPage = () => {
  const [markdown, setMarkdown] = React.useState<string>('')
  return (
    <div className="m-4 flex flex-col gap-2">
      <h1 className="mb-4 self-center">Markdown のテストページ</h1>
      <div className="mb-2">
        <h2>入力</h2>
        <textarea
          className="w-full border-2"
          onChange={(e) => setMarkdown(e.target.value)}
          value={markdown}
        />
      </div>
      <div className="mb-2">
        <h2>Markdown</h2>
        <div className="prose border-2" dangerouslySetInnerHTML={{ __html: markHtml(markdown) }} />
      </div>
      <div className="mb-2">
        <h2>PlainText</h2>
        <p className="border-2">{markPlainText(markdown)}</p>
      </div>
    </div>
  )
}

export default MarkdownTest
