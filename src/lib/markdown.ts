// 埋め込み?
// * table
// * 取り消し線
//
// 付けたい機能
// * footnote
// * highrightjs
// * katex
// * container
// * front-matter
//
// 要件に応じて
// * anchor
// * toc-done-right
// * ins
// * mark
// * emoji

import MarkdownIt from 'markdown-it'
import MarkdownItFootnote from 'markdown-it-footnote'
import MarkdownItFrontMatter from 'markdown-it-front-matter'
import MarkdownItHighlightjs from 'markdown-it-highlightjs'
import MarkdownItKatex from 'markdown-it-katex'
import MarkdownItContainer from 'markdown-it-container'
import MarkdownItPlainText from 'markdown-it-plain-text'

type Status = 'error' | 'success' | 'warning' | 'info'

// const statusColor: { [key in Status]: string } = {
//   error: 'red',
//   success: 'green',
//   warning: 'yello',
//   info: 'blue',
// }

const statusDiv: { [key in Status]: string } = {
  // TODO: Emoji は Icon に変法
  error:
    "<div class='bg-red-50 border border-red-200 rounded-md text-sm text-red-700 m-2 px-2 flex' role='alert'><div class='flex-shrink-0 self-center text-xl'>❌</div><div class='ml-4'>",
  success:
    "<div class='bg-green-50 border border-green-200 rounded-md text-sm text-green-700 m-2 px-2 flex' role='alert'><div class='flex-shrink-0 self-center text-xl'>✅</div><div class='ml-4'>",
  warning:
    "<div class='bg-yellow-50 border border-yellow-200 rounded-md text-sm text-yellow-700 m-2 px-2 flex' role='alert'><div class='flex-shrink-0 self-center text-xl'>⚠️</div><div class='ml-4'>",
  info: "<div class='bg-blue-50 border border-blue-200 rounded-md text-sm text-blue-700 m-2 px-2 flex' role='alert'><div class='flex-shrink-0 self-center text-xl'>ℹ️</div><div class='ml-4'>",
}

const statusTitle: { [key in Status]: string } = {
  error: "<p class='font-bold text-red-800'>",
  success: "<p class='font-bold text-green-800'>",
  warning: "<p class='font-bold text-yellow-800'>",
  info: "<p class='font-bold text-blue-800'>",
}

const containerRegExp = (status: Status) => {
  const re = new RegExp(`^${status}+(.*)$`)
  return re
}

const containerRender = (status: Status) => (tokens: any, idx: any) => {
  const m = tokens[idx].info.trim().match(containerRegExp(status))
  if (tokens[idx].nesting === 1) {
    return `${statusDiv[status]}${m[1] && `${statusTitle[status]}${m[1]}</p>`}`
  }
  return '</div></div>\n'
}

const containerValidate = (status: Status) => (params: any) =>
  params.trim().match(containerRegExp(status))

const containerOpts = (status: Status) => ({
  validate: containerValidate(status),
  render: containerRender(status),
})

const md = new MarkdownIt()

md.use(MarkdownItFootnote)
md.use(MarkdownItFrontMatter, (fm) => {
  console.log(fm)
})
md.use(MarkdownItHighlightjs)
md.use(MarkdownItKatex)
md.use(MarkdownItContainer, 'error', containerOpts('error'))
md.use(MarkdownItContainer, 'success', containerOpts('success'))
md.use(MarkdownItContainer, 'warning', containerOpts('warning'))
md.use(MarkdownItContainer, 'info', containerOpts('info'))
md.use(MarkdownItPlainText)

/**
 * markdown to html
 * @param markdown markdown
 * @returns html
 */
export const md2Html = (markdown: string) => {
  // TODO: MarkdownItFrontMatter: callback func
  // TODO: MarkdownItHighlightjs: css
  // TODO: MarkdownItKatex: css
  // TODO: MarkdownItContainer: css or func

  const html = md.render(markdown)
  return html
}
/**
 * markdown to plaintext
 * @param markdown markdown
 * @returns plaintext
 */
export const md2Plain = (markdown: string) => {
  md.render(markdown)
  const plain = (md as any).plainText
  return plain
}
