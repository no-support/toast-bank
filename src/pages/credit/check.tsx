import PageLoader from '@/components/PageLoader'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Confetti from 'react-confetti-boom'

const CheckPage = () => {
  const [pending, setPending] = useState(5)
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      if (pending > 0) {
        setPending(pending - 1)
      } else {
        // TODO: 신용 정보 createOrUpdate
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [pending, router])

  return (
    <div>
      {pending ? (
        <>
          <PageLoader message="쏜살같이 신용 정보를 조회 중이에요!"></PageLoader>
        </>
      ) : (
        <div className="flex h-[calc(100vh-3rem)] justify-center items-center">
          <Confetti
            mode="boom"
            particleCount={300}
            spreadDeg={50}
            effectCount={Infinity}
            launchSpeed={3}
          />
          <p>조회가 완료되었어요!</p>
          <button
            className="w-[calc(100%-1.5rem)] absolute bottom-3"
            onClick={() => {
              window.history.back()
            }}
          >
            확인
          </button>
        </div>
      )}
    </div>
  )
}

function getCreditScore(min: number = 200, max: number = 1000) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export default CheckPage
