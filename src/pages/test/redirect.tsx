import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const TestRedirect = () => {
  const [countdown, setCountdown] = useState(3)
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      if (countdown > 1) {
        setCountdown(countdown - 1)
      } else {
        router.push('/')
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [countdown, router])

  return <div>{`${countdown}초 후에 메인 페이지로 이동해요.`}</div>
}

export default TestRedirect
