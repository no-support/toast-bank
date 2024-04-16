import type { GetServerSidePropsContext } from 'next'
import CreditScoreGauge from '@/components/CreditScoreGauge'
import Modal from '@/components/Modal'
import useModal from '@/hooks/useModal'
import { getServerSession } from 'next-auth'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { authOptions } from '../api/auth/[...nextauth]'
import { getCreditScore } from '@/remote/credit'
import Head from 'next/head'

interface CreditPageProps {
  score: number
}

const CreditPage = ({ score = 0 }: CreditPageProps) => {
  const router = useRouter()
  const { data } = useSession()

  const { isModalOpen, openModal, closeModal } = useModal()

  const handleClick = () => {
    if (!data?.user) {
      openModal()
    } else {
      router.push('/credit/check')
    }
  }

  return (
    <>
      <Head>
        <title>토스트뱅크 | 신용 점수 확인</title>
      </Head>
      <div className="p-3">
        <div className="gauge-section flex flex-col items-center mb-8">
          <span className="font-semibold text-center mb-4 text-text">
            내 신용 점수를 <br /> 조회하고 관리해보세요
          </span>
          <div className="h-32">
            <CreditScoreGauge score={score}></CreditScoreGauge>
          </div>
        </div>

        <div className="introduce-section">
          <div className="flex flex-col mb-4">
            <span className="font-semibold text-text">정확한 신용평점</span>
            <span className="text-text">
              대표 신용평가 기관의 데이터로 관리해요
            </span>
          </div>
          <div className="flex flex-col mb-4">
            <span className="font-semibold text-text">신용 점수 무료 조회</span>
            <span className="text-text">
              신용 점수에 영향 없이 무료로 조회가 가능해요
            </span>
          </div>
        </div>

        <div className="retrieve-section">
          <button
            className="w-[calc(100%-1.5rem)] absolute bottom-3"
            onClick={handleClick}
          >
            30초 만에 신용 점수 조회하기
          </button>
          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            title={'로그인이 필요한 기능이에요'}
            content={
              '정확한 신용 정보를 확인하기 위해 로그인을 먼저 진행해주세요'
            }
          />
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const { req, res } = context
  const session = await getServerSession(req, res, authOptions)
  if (!session)
    return {
      props: {},
    }

  const credit = await getCreditScore(session.user.email)

  if (!credit)
    return {
      props: {},
    }
  return {
    props: { score: credit.score },
  }
}
export default CreditPage
