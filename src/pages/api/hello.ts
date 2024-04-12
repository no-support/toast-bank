import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from './auth/[...nextauth]'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json({ name: 'John Doe' })
}

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>,
// ) {
//   const session = await getServerSession(req, res, authOptions)
//   console.log('test.ts - session 💕: ', session)
//   res.status(200).json({ name: 'John Doe' })
// }
