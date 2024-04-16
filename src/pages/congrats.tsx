import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Confetti from 'react-confetti-boom'

const CongratsPage = () => {
  const [countdown, setCountdown] = useState(3)
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      if (countdown > 1) {
        setCountdown(countdown - 1)
      } else {
        router.push('/signin')
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [countdown, router])

  return (
    <>
      <Head>
        <title>토스트뱅크 | 회원 가입 완료</title>
        <meta property="og:title" content="토스트뱅크" />
        <meta
          property="og:description"
          content="완전히 새로운 은행을 만나보세요"
        />
        <meta property="og:image" content="/thumbnail.png" />
      </Head>
      <div className="flex h-[calc(100vh-3rem)] justify-center items-center">
        <Confetti
          mode="boom"
          particleCount={300}
          spreadDeg={50}
          launchSpeed={3}
        />
        <div className="flex flex-col items-center text-text">
          <p>회원 가입이 완료되었어요!</p>
          <p>{`${countdown}초 후에 로그인 페이지로 이동해요.`}</p>
        </div>
      </div>
    </>
  )
}

export default CongratsPage
