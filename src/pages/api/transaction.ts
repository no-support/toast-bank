import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/db'
import { Card } from '@/interface/card'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Card[]>,
) {
  const { keyword = '' }: { keyword?: string } = req.query
  // TODO: Implement search logic
  // const transactions: Transactions[] = await prisma.transactions.findMany({
  //   where: {
  //     name: {
  //       contains: keyword,
  //     },
  //   },
  // })
  // res.status(200).json(transactions)
}
