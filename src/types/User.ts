import { z } from 'zod'

/**
 * ユーザーのzodスキーマ
 */
export const userSchema = z.object({
  id: z.string().describe('ID'),
  name: z.string().describe('名前'),
  email: z.string().email().describe('メールアドレス'),
})

/**
 *  ユーザーの型
 */
export type User = z.infer<typeof userSchema>
