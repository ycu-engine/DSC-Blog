import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypeHighlight from 'rehype-highlight'
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
    .use(remarkFrontmatter)
    .use(remarkMath)
    .use(remarkRehype)
    .use(rehypeKatex)
    .use(rehypeHighlight, { detect: true, ignoreMissing: true })
    .use(rehypeReact, { createElement: React.createElement, Fragment: React.Fragment })
    .process(markdown)
  const react = result.result
  return react
}
