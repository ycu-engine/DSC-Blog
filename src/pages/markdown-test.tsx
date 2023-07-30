import { NextPage } from 'next'
import React from 'react'
import { mark2react } from '@/lib/markdown/utils'

/**
 * Markdown Test Page
 * @returns Markdown Test Page
 */
const MarkdownTest: NextPage = () => {
  const [markdown, setMarkdown] = React.useState<string>('')
  const [react, setReact] = React.useState<React.ReactElement>()
  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = async (e) => {
    setMarkdown(e.target.value)
    mark2react(e.target.value).then((element) => setReact(element))
  }
  return (
    <div className="m-4 flex flex-col gap-2">
      <h1 className="mb-4 self-center">Markdown のテストページ</h1>
      <div className="mb-2">
        <h2>入力</h2>
        <textarea className="w-full border-2" onChange={handleChange} value={markdown} />
      </div>
      <div className="mb-2">
        <h2>Markdown</h2>
        <div>{react}</div>
      </div>
    </div>
  )
}

export default MarkdownTest