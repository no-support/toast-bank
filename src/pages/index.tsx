import Badge from '@/components/Badge'
import Container from '@/components/Container'
import CreditScoreGauge from '@/components/CreditScoreGauge'
import Footer from '@/components/Footer'
import { Card } from '@/interface/card'
import { getCardRanking } from '@/remote/card'
import { GetServerSidePropsContext } from 'next'
import { DefaultSession, getServerSession } from 'next-auth'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FaAngleRight } from 'react-icons/fa'
import { authOptions } from './api/auth/[...nextauth]'
import { getCreditScore } from '@/remote/credit'
import { Credit } from '@/interface/credit'
import addDelimiter from '@/utils/addDelimiter'
import { getBalance } from '@/remote/transaction'
import Head from 'next/head'

interface HomePageProps {
  user?: DefaultSession['user']
  balance?: number
  credit?: Credit | null
  cards: Card[]
}

const HomePage = ({ user, balance, credit, cards }: HomePageProps) => {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>토스트뱅크</title>
        <meta property="og:title" content="토스트뱅크" />
        <meta
          property="og:description"
          content="완전히 새로운 은행을 만나보세요"
        />
        <meta property="og:image" content="/thumbnail.png" />
      </Head>
      <div className="p-3">
        {/* 자산 */}
        {user && (
          <Container>
            <div className="flex flex-col justify-center h-full">
              <span className="text-gray-500">{user.name}회원님의 자산</span>
              <span className="font-semibold text-lg text-text">
                {addDelimiter(balance ?? 0)}원
              </span>
            </div>
            <Link
              href={'/asset'}
              className="p-2 bg-primary rounded-md text-white "
            >
              분석
            </Link>
          </Container>
        )}
        {/* 신용 점수 */}
        <Container>
          <div className="flex flex-col justify-center h-full gap-3">
            <span className="font-semibold text-text">
              나의 신용도를 증명하고
              <br />
              점수를 올리세요
            </span>
            <Link
              href={'/credit'}
              className="p-2 bg-primary rounded-md text-white "
            >
              내 신용 점수 보러 가기
            </Link>
          </div>
          <div>
            <CreditScoreGauge score={credit?.score ?? 0}></CreditScoreGauge>
          </div>
        </Container>
        {/* 추천 카드 */}
        <div className="recommend-card ">
          {/* 추천 카드 헤더 */}
          <div className="header w-full h-12 flex justify-between items-center">
            <span className="font-semibold text-text">추천 카드</span>
          </div>
          {/* 추천 카드 콘텐츠 */}
          <div className="contents-section">
            <ul>
              {cards.map((card, idx) => (
                <li key={idx}>
                  <div
                    className="item h-16 flex justify-between items-center cursor-pointer"
                    onClick={() => {
                      router.push(`/cards/${card.id}`)
                    }}
                  >
                    <div className="flex flex-col justify-around">
                      <span className="font-semibold text-text">
                        {`${card.id}`}위
                      </span>
                      <span className="text-text">{card.name}</span>
                    </div>
                    <div className="flex justify-center items-center">
                      {card.payback && <Badge text={`${card.payback}`} />}
                      <FaAngleRight className="w-6 h-6 text-text" />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* 추천 카드 더보기 */}
          <Link
            className="bg-white border border-primary w-full h-12 my-3 flex justify-center items-center"
            href={'/cards'}
          >
            더 보기
          </Link>
        </div>
      </div>
      <Footer />
    </>
  )
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const cards = await getCardRanking()

  const { req, res } = context
  const session = await getServerSession(req, res, authOptions)

  if (session) {
    const credit = await getCreditScore(session.user.email)
    const recentTransaction = await getBalance(session.user.email)

    return {
      props: {
        user: session.user,
        balance: recentTransaction?.balance,
        credit: credit,
        cards: cards,
      },
    }
  }
  return {
    props: { cards: cards },
  }
}
export default HomePage
