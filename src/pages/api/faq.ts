import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import { Faq } from '@/interface/faq'

export default async function getFaqs(
  req: NextApiRequest,
  res: NextApiResponse<Faq[]>,
) {
  const prisma = new PrismaClient()

  const faqs = await prisma.faq.findMany()
  res.status(200).json(faqs)
}
