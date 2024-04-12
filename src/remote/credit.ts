import prisma from '@/lib/db'

export const getCredit = async (email: string) => {
  const credit = await prisma.credit.findUnique({
    where: {
      email: email,
    },
  })

  return credit
}

interface CreditProps {
  email: string
  score: number
}

export const upsertCredit = async ({ email, score }: CreditProps) => {
  const credit = await prisma.credit.upsert({
    where: {
      email: email,
    },
    update: {
      score: score,
    },
    create: {
      email: email,
      score: score,
    },
  })

  return credit
}
