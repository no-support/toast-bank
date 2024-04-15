import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getSession } from 'next-auth/react'
import { GetServerSidePropsContext } from 'next'

const NeedAuthPage = () => {
  // getSession().then((result) => {})

  return <>AuthenticatedPage</>
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  // const session = await getSession() // null
  const { req, res } = context
  const session = await getServerSession(req, res, authOptions)
  console.log('auth-server.tsx - session: ', session)
  if (session?.user) {
  }
  return { props: {} }
}

export default NeedAuthPage
