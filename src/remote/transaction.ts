import { Transaction } from '@/interface/transaction'
import prisma from '@/lib/db'
import { TransactionRes } from '@/pages/api/transaction'
import axios from 'axios'

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

export const getTransactions = async ({ type = 'all', pageParam = 1 }) => {
  const { data }: { data: TransactionRes } = await axios.get(
    `/api/transaction?type=${type}&page=${pageParam}`,
  )
  return data
}
