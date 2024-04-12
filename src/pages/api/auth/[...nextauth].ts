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
      async authorize(credentials, req) {
        if (!credentials) {
          return null
        }
        const user = await prisma.user.findUnique({
          where: {
            email: req.query?.email,
          },
        })
        if (!user) {
          console.error('없는 이메일')
          return null
        }
        const passwordChk = await bcrypt.compare(
          req.query?.password,
          user.password,
        )
        if (!passwordChk) {
          console.error('비밀번호 불일치')
          return null
        }
        return {
          id: user.id + '',
          email: user.email,
          name: user.name,
        }
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
    jwt: async ({ token, user }) => {
      if (user) {
        return {
          ...token,
          user: { ...user },
        }
      }
      return token
    },
    session: async ({ session, token }: any) => {
      return {
        ...session,
        user: { ...token.user },
      }
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
}

export default NextAuth(authOptions)
