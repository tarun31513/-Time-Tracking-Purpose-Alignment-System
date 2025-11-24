// prisma/seed.ts
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database...')

  // Create a test user
  const hashedPassword = await bcrypt.hash('testpassword123', 10)
  
  const user = await prisma.user.upsert({
    where: { email: 'test@example.com' },
    update: {},
    create: {
      email: 'test@example.com',
      password: hashedPassword,
      name: 'Test User',
      timezone: 'Asia/Kolkata',
      settings: {
        theme: 'light',
        notifications: true,
      },
    },
  })

  // Create default categories
  const categories = [
    { name: 'Work', color: '#3B82F6', order: 0, isDefault: true },
    { name: 'Exercise', color: '#10B981', order: 1, isDefault: true },
    { name: 'Learning', color: '#8B5CF6', order: 2, isDefault: true },
    { name: 'Family', color: '#F59E0B', order: 3, isDefault: true },
    { name: 'Rest', color: '#6B7280', order: 4, isDefault: true },
  ]

  for (const category of categories) {
    await prisma.category.upsert({
      where: {
        userId_name: {
          userId: user.id,
          name: category.name,
        },
      },
      update: {},
      create: {
        ...category,
        userId: user.id,
      },
    })
  }

  console.log('Seeding complete!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })