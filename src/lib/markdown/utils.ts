import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeReact from 'rehype-react'
import React from 'react'

/**
 * markdown to react JSX
 * @param markdown markdown
 * @returns react JSX
 */
export const mark2react = async (markdown: string) => {
  const result = await remark()
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeReact, { createElement: React.createElement, Fragment: React.Fragment })
    .process(markdown)
  const react = result.result
  return react
}
