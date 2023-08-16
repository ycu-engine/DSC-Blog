import { z } from 'zod'
import { userSchema } from './User'

/**
 * 記事のzodスキーマ
 */
export const PostSchema = z.object({
  id: z.string().describe('ID'),
  author: userSchema.describe('著者'),
  title: z.string().describe('タイトル'),
  content: z.string().describe('記事本文'),
  createdAt: z.string().datetime().describe('作成日時'),
  updatedAt: z.string().datetime().describe('更新日時'),
  isPublic: z.boolean().describe('公開設定'),
  coverImageUri: z.string().url().describe('カバー画像'),
})

/**
 * 記事の型
 */
export type Post = z.infer<typeof PostSchema>
