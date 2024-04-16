import type { NextApiRequest, NextApiResponse } from 'next'
import { Faq } from '@/interface/faq'
import prisma from '@/lib/db'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Faq[]>,
) {
  const faqs: Faq[] = await prisma.faq.findMany()
  res.status(200).json(faqs)
}
