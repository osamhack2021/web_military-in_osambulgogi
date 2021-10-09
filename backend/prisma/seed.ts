import { PrismaClient, Prisma } from '@prisma/client'
import { Group, Board } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const userData: Prisma.UserCreateInput[] = [
    {
      username: 'foo',
      password: await bcrypt.hash('foofoofoo', 8),
      nickname: 'chulsoo',
      user_type: 'NONE'
    },
    {
      username: 'admin',
      password: await bcrypt.hash('adminadmin', 8),
      nickname: 'admin',
      user_type: 'SUPER_ADMIN'
    }
  ]

  const groupData: Prisma.GroupCreateInput[] = [
    {
      name: '국군 제999정보통신단'
    }
  ]

  const boardData: Prisma.BoardCreateInput[] = [
    {
      name: '자유게시판',
      is_annonymous: true
    },
    {
      name: '장병게시판',
      is_annonymous: true
    },
    {
      group: { connect: { id: 1 } },
      name: '자유게시판',
      is_annonymous: false
    }
  ]

  const articleData: Prisma.ArticleCreateInput[] = [
    {
      board: { connect: { id: 1 } },
      writer: { connect: { id: 1 } },
      is_notice: false,
      title: '다들 안녕하세요! 😄',
      content: '드디어 군in 서비스가 시작됐네요 ㅎㅎ'
    }
  ]

  console.log('Start seeding ...')

  for (const u of userData) {
    const user = await prisma.user.create({
      data: u
    })
    console.log(`Created user with id: ${user.id}`)
  }

  for (const g of groupData) {
    const group = await prisma.group.create({
      data: g
    })
    console.log(`Created group with id: ${group.id}`)
  }

  for (const b of boardData) {
    const board = await prisma.board.create({
      data: b
    })
    console.log(`Created board with id: ${board.id}`)
  }

  for (const a of articleData) {
    const article = await prisma.article.create({
      data: a
    })
    console.log(`Created article with id: ${article.id}`)
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
