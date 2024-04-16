import { Card } from '@/interface/card'
import prisma from '@/lib/db'
import { NextApiRequest, NextApiResponse } from 'next'

const LIMIT = 10

export interface CardRes {
  data: Card[]
  currentPage: number
  totalCount: number
  nextPage: number | null
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CardRes>,
) {
  const { page = '1' }: { page?: string } = req.query

  const nPage = parseInt(page)
  const count = await prisma.card.count()
  const skipPage = nPage - 1
  const cards: Card[] = await prisma.card.findMany({
    orderBy: { id: 'asc' },
    take: LIMIT,
    skip: skipPage * LIMIT,
  })

  return res.status(200).json({
    data: cards,
    currentPage: nPage,
    totalCount: count,
    nextPage: nPage < Math.ceil(count / LIMIT) ? nPage + 1 : null,
  })
}
