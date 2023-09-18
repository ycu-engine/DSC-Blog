import { z } from 'zod'
import { userSchema } from './User'

/**
 * 記事のzodスキーマ
 */
export const PostSchema = z.object({
  author: userSchema.describe('著者'),
  content: z.string().describe('記事本文'),
  coverImageUri: z.string().url().describe('カバー画像'),
  createdAt: z.string().datetime().describe('作成日時'),
  id: z.string().describe('ID'),
  isPublic: z.boolean().describe('公開設定'),
  title: z.string().describe('タイトル'),
  updatedAt: z.string().datetime().describe('更新日時'),
})

/**
 * 記事の型
 */
export type Post = z.infer<typeof PostSchema>
