import NextAuth, { NextAuthOptions } from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { Adapter } from 'next-auth/adapters'
import prisma from '@/lib/db'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcrypt'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (!credentials) {
          return null
        }
        const userDao = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        })
        if (!userDao) {
          console.error('없는 이메일')
          return null
        }
        const passwordChk = await bcrypt.compare(
          credentials.password,
          userDao.password,
        )
        if (!passwordChk) {
          console.error('비밀번호 불일치')
          return null
        }
        const { password, ...user } = userDao
        return user
      },
    }),
  ],
  pages: {
    signIn: '/signin',
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    session: async ({ session, token }) => {
      return {
        ...session,
        user: { name: token.name, email: token.email },
      }
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
}

export default NextAuth(authOptions)
