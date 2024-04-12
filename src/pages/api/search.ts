import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/db'
import { Card } from '@/interface/card'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Card[]>,
) {
  const { keyword = '' }: { keyword?: string } = req.query
  const cards: Card[] = await prisma.card.findMany({
    where: {
      name: {
        contains: keyword,
      },
    },
  })
  res.status(200).json(cards)
}
