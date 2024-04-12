import { Credit } from '@/interface/credit'
import prisma from '@/lib/db'

export const getCreditScore = async (email: string) => {
  const credit: Credit | null = await prisma.credit.findUnique({
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
  const credit: Credit = await prisma.credit.upsert({
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
