import prisma from '@/utils/db'
import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcrypt'

type Data = {
  message: string
}

interface UserForm {
  email: string
  password: string
  passwordChk: string
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method === 'POST') {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    await prisma.user.create({
      data: {
        email: req.body.email,
        password: hashedPassword,
        name: req.body.name,
      },
    })
    res.status(200).json({ message: 'success' })
  }
}
