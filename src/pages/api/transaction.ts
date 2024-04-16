import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/db'
import { getServerSession } from 'next-auth'
import { authOptions } from './auth/[...nextauth]'
import { Transaction } from '@/interface/transaction'

const LIMIT = 5

export interface TransactionRes {
  data: Transaction[]
  currentPage: number
  totalCount: number
  nextPage: number | null
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TransactionRes>,
) {
  const session = await getServerSession(req, res, authOptions)
  if (!session) {
    return { props: {} }
  }

  const {
    type = 'all',
    page = '1',
  }: { type?: 'all' | 'deposit' | 'withdrawal'; page?: string } = req.query
  const nPage = parseInt(page)
  const skipPage = nPage - 1

  if (type === 'all') {
    const transactions = await prisma.transaction.findMany({
      where: {
        email: session.user.email,
      },
      orderBy: { id: 'asc' },
      take: LIMIT,
      skip: skipPage * LIMIT,
    })
    const count = await prisma.transaction.count({
      where: {
        email: session.user.email,
      },
    })
    res.status(200).json({
      data: transactions,
      currentPage: nPage,
      totalCount: count,
      nextPage: nPage < Math.ceil(count / LIMIT) ? nPage + 1 : null,
    })
  } else {
    const transactions: Transaction[] = await prisma.transaction.findMany({
      where: {
        email: session.user.email,
        type: type,
      },
      orderBy: { id: 'asc' },
      take: LIMIT,
      skip: skipPage * LIMIT,
    })
    const count = await prisma.transaction.count({
      where: {
        email: session.user.email,
        type: type,
      },
    })
    res.status(200).json({
      data: transactions,
      currentPage: nPage,
      totalCount: count,
      nextPage: nPage < Math.ceil(count / LIMIT) ? nPage + 1 : null,
    })
  }
}
