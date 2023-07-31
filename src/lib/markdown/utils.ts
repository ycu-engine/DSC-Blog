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
    .use(remarkDirective)
    .use(myRemarkPlugin)
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
    .process(markdown)
  const react = result.result
  return react
}

export type { AlartStatus }
