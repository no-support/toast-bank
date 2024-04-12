'use client'

import { useSession } from 'next-auth/react'

const NeedAuthPage = () => {
  const result = useSession({
    required: true,
    onUnauthenticated() {
      console.warn('Not logged in!')
    },
  })
  if (result.status === 'loading') {
    return <>loading or unauth..</>
  }
  return <>Authenticated 👌</>
}

export default NeedAuthPage
