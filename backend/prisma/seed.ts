import { PrismaClient, Prisma } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const userData: Prisma.UserCreateInput[] = [
    {
      username: 'foo',
      group_id: 1,
      password: await bcrypt.hash('foofoofoo', 8),
      nickname: 'chulsoo',
      user_type: 'NONE'
    }
  ]

  console.log('Start seeding ...')
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u
    })
    console.log(`Created user with id: ${user.id}`)
  }
  console.log('Seeding finished.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
