import { z } from 'zod'

/**
 * ユーザーのzodスキーマ
 */
export const userSchema = z.object({
  email: z.string().email().describe('メールアドレス'),
  id: z.string().describe('ID'),
  name: z.string().describe('名前'),
})

/**
 *  ユーザーの型
 */
export type User = z.infer<typeof userSchema>
