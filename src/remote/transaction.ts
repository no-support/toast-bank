import { Transaction } from '@/interface/transaction'
import prisma from '@/lib/db'

export const getRecentTransaction = async (email: string) => {
  const transactions: Transaction[] = await prisma.transaction.findMany({
    where: {
      email: email,
    },
    orderBy: {
      date: 'desc',
    },
    take: 5,
  })

  return transactions
}

export const getBalance = async (email: string) => {
  const recentTransaction = await prisma.transaction.findFirst({
    where: {
      email: email,
    },
    orderBy: {
      date: 'desc',
    },
  })
  return recentTransaction
}
