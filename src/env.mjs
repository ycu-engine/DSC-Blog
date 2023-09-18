import { createEnv } from '@t3-oss/env-nextjs'

import { z } from 'zod'

/**
 * 環境変数をzodでバリデーションして安全に取得する
 * @see https://create.t3.gg/en/usage/env-variables
 */
export const env = createEnv({
  client: {},
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
  },
  server: {
    NODE_ENV: z.enum(['development', 'test', 'production']),
  },
  skipValidation: !!process.env['SKIP_ENV_VALIDATION'],
})
