import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMath from 'remark-math'
import remarkDirective from 'remark-directive'
import { visit } from 'unist-util-visit'
import rehypeKatex from 'rehype-katex'
import rehypeHighlight from 'rehype-highlight'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import rehypeReact from 'rehype-react'
import remarkPlaintext from 'remark-plain-text'
import React from 'react'
import type { Plugin } from 'unified'
import type { Node } from 'mdast'
import { AlartStatus, alartStatus } from '@/components/ui/alartNotShadcn'
import { Alert } from '@/components/ui/Alert/Alert'

const myRemarkPlugin: Plugin = () => {
  const visitor = (node: Node) => {
    const newNode = node
    if (node.type === 'textDirective') {
      newNode.data = { ...node.data, hName: 'span' }
      return
    }

    if (node.type === 'leafDirective') {
      newNode.data = { ...node.data, hName: 'div' }
      return
    }

    if (node.type === 'containerDirective') {
      const nodeName = 'name' in node && typeof node.name === 'string' && node.name.toLowerCase()
      if (nodeName && alartStatus.includes(nodeName)) {
        newNode.data = { ...node.data, hName: nodeName as AlartStatus }
      }
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

const markHastProcessor = markMdastProcessor()
  .use(remarkRehype)
  .use(rehypeKatex)
  .use(rehypeHighlight, { detect: true, ignoreMissing: true })

const markReactProcessor = markHastProcessor().use(rehypeReact, {
  Fragment: React.Fragment,
  components: {
    ['error' as keyof JSX.IntrinsicElements]: ({ children }: { children: string }) => (
      <Alert variant="error">{children}</Alert>
    ),
    ['success' as keyof JSX.IntrinsicElements]: ({ children }: { children: string }) => (
      <Alert variant="success">{children}</Alert>
    ),
    ['warning' as keyof JSX.IntrinsicElements]: ({ children }: { children: string }) => (
      <Alert variant="warning">{children}</Alert>
    ),
    ['info' as keyof JSX.IntrinsicElements]: ({ children }: { children: string }) => (
      <Alert variant="info">{children}</Alert>
    ),
  },
  createElement: React.createElement,
})

const markHtmlProcessor = markHastProcessor().use(rehypeStringify)
const markPlainTextProcessor = markMdastProcessor().use(remarkPlaintext)

/**
 * markdown to react element
 * @param markdown markdown
 * @returns react element
 */
export const markReact = async (markdown: string) => {
  const result = await markReactProcessor().process(markdown)
  const react = result.result
  return react
}
/**
 * markdown to plain text
 * @param markdown markdown
 * @returns plain text
 */
export const markPlaintext = async (markdown: string) => {
  const result = await markPlainTextProcessor.process(markdown)
  const plainText = result.toString()
  return plainText
}

/**
 * markdown to html
 * @param markdown markdown
 * @returns html
 */
export const markHtml = async (markdown: string) => {
  const result = await markHtmlProcessor().process(markdown)
  const html = String(result)
  return html
}
