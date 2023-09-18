import { PrismaClient } from '@prisma/client'

const client = new PrismaClient()

/**
 * テスト用のユーザーを作成する
 */
export const testUserId = 'test'
const main = async () => {
  await client.user.create({
    data: {
      email: 'test@example.com',
      firstName: 'テスト',
      id: testUserId,
      lastName: '太郎',
    },
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await client.$disconnect()
  })
