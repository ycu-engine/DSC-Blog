import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMath from 'remark-math'
import remarkDirective from 'remark-directive'
import { visit } from 'unist-util-visit'
import rehypeKatex from 'rehype-katex'
import rehypeHighlight from 'rehype-highlight'
import remarkRehype from 'remark-rehype'
import rehypeReact from 'rehype-react'
import remarkPlaintext from 'remark-plain-text'
import React from 'react'
import type { Plugin } from 'unified'
import type { Node } from 'mdast'
import {
  AlartError,
  AlartInfo,
  AlartStatus,
  AlartSuccess,
  AlartWarning,
  alartStatus,
} from '@/components/ui/arrart'

const myRemarkPlugin: Plugin = () => {
  const visitor = (node: Node) => {
    if (
      node.type === 'textDirective' ||
      node.type === 'leafDirective' ||
      node.type === 'containerDirective'
    ) {
      if (node.type === 'textDirective') {
        const newNode = node
        newNode.data = { ...node.data, hName: 'span' }
        return
      }
      if (node.type === 'leafDirective') {
        const newNode = node
        newNode.data = { ...node.data, hName: 'div' }
        return
      }
      if (!('name' in node)) return
      if (!(typeof node.name === 'string')) return
      if (!alartStatus.includes(node.name)) return
      const newNode = node
      newNode.data = { ...node.data, hName: node.name as AlartStatus }
    }
  }
  const myRemark = (tree: Node) => {
    visit(tree, visitor)
  }
  return myRemark
}

export type { AlartStatus }

const markMdastProcessor = remark()
  .use(remarkGfm)
  .use(remarkFrontmatter)
  .use(remarkMath)
  .use(remarkDirective)
  .use(myRemarkPlugin)

const markReactProcessor = markMdastProcessor()
  .use(remarkRehype)
  .use(rehypeKatex)
  .use(rehypeHighlight, { detect: true, ignoreMissing: true })
  .use(rehypeReact, {
    createElement: React.createElement,
    Fragment: React.Fragment,
    components: {
      ['error' as keyof JSX.IntrinsicElements]: AlartError,
      ['success' as keyof JSX.IntrinsicElements]: AlartSuccess,
      ['warning' as keyof JSX.IntrinsicElements]: AlartWarning,
      ['info' as keyof JSX.IntrinsicElements]: AlartInfo,
    },
  })

const markPlainTextProcessor = markMdastProcessor().use(remarkPlaintext)

/**
 * markdown to react element
 * @param markdown markdown
 * @returns react element
 */
export const markReact = async (markdown: string) => {
  const result = await markReactProcessor().process(markdown)
  return result.result
}
/**
 * markdown to plain text
 * @param markdown markdown
 * @returns plain text
 */
export const markPlaintext = async (markdown: string) => {
  const plainText = await markPlainTextProcessor.process(markdown)
  return plainText.toString()
}
