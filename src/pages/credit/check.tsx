import PageLoader from '@/components/PageLoader'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Check = () => {
  // TODO: 조회가 완료되었을 때의 이미지를 로켓이 아닌 다른 이미지로 바꾸자..
  const [pending, setPending] = useState(5)
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      if (pending > 0) {
        console.log('check.tsx - pending: ', pending)
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
        <div>
          <PageLoader message="조회가 완료되었어요!"></PageLoader>
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

export default Check
