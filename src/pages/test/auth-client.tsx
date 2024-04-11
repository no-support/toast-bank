'use client'

import { useSession } from 'next-auth/react'

const NeedAuthPage = () => {
  const result = useSession({
    required: true,
    onUnauthenticated() {
      console.log('Not logged in!')
    },
  })
  console.log('auth-client.tsx - result: ', result)
  if (result.status === 'loading') {
    return <>loading or unauth..</>
  }
  return <>Authenticated 👌</>
}

export default NeedAuthPage
