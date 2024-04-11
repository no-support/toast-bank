import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { redirect } from 'next/navigation'

const NeedAuthPage = () => {
  console.log('auth-server.tsx - test: ')
  /* 
  const session = await getServerSession(authOptions)
  console.log('auth.tsx - session: ', session)
  if (!session) {
    redirect('/')
  }
  */
  return <>AuthenticatedPage</>
}

export const getServerSideProps = async () => {
  const session = await getServerSession(authOptions)
  console.log('auth.tsx - session: ', session)
}

export default NeedAuthPage
