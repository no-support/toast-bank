import PageLoader from '@/components/PageLoader'
import { upsertCredit } from '@/remote/credit'
import { GetServerSidePropsContext } from 'next'
import { getServerSession } from 'next-auth'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Confetti from 'react-confetti-boom'
import { authOptions } from '../api/auth/[...nextauth]'
import getRandomNumber from '@/utils/getRandomNumber'

const CheckPage = () => {
  const [pending, setPending] = useState(5)
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      if (pending > 0) {
        setPending(pending - 1)
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [pending])

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
          <p className="text-text">조회가 완료되었어요!</p>
          <button
            className="w-[calc(100%-1.5rem)] absolute bottom-3"
            onClick={() => {
              router.back()
            }}
          >
            확인
          </button>
        </div>
      )}
    </div>
  )
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const { req, res } = context
  const session = await getServerSession(req, res, authOptions)
  const score = getRandomNumber(200, 1000)
  const result = await upsertCredit({
    email: session!.user.email,
    score: score,
  })

  return { props: {} }
}

export default CheckPage
