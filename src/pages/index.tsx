import Container from '@/components/Container'
import CreditScoreGauge from '@/components/CreditScoreGauge'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FaAngleRight } from 'react-icons/fa'
const Home = () => {
  const router = useRouter()

  return (
    <>
      <div className="p-3">
        {/* 자산 */}
        {true && (
          <Container>
            <div className="flex flex-col justify-center h-full">
              <span className="text-gray-500">홍길동 회원님의 자산</span>
              <span className="font-semibold text-lg">127,000원</span>
            </div>
            <Link
              href={'/asset'}
              className="p-2 bg-primary-color rounded-md text-white "
            >
              분석
            </Link>
          </Container>
        )}
        {/* 신용 점수 */}
        <Container>
          <div className="flex flex-col justify-center h-full gap-3">
            <span className="font-semibold">
              나의 신용도를 증명하고
              <br />
              점수를 올리세요
            </span>
            <Link
              href={'/credit'}
              className="p-2 bg-primary-color rounded-md text-white "
            >
              내 신용 점수 보러 가기
            </Link>
          </div>
          <div>
            <CreditScoreGauge score={100}></CreditScoreGauge>
          </div>
        </Container>
        {/* 추천 카드 */}
        <div className="recommend-card ">
          {/* 추천 카드 헤더 */}
          <div className="header w-full h-12 flex justify-between items-center">
            <span className="font-semibold">추천 카드</span>
          </div>
          {/* 추천 카드 콘텐츠 */}
          <div className="contents-section">
            <ul>
              {[...Array(5)].map((item, idx) => (
                <li key={idx}>
                  <div className="item h-16 flex justify-between items-center">
                    <div className="flex flex-col justify-around">
                      <span className="font-semibold">{`${idx + 1}`}위</span>
                      <span>KB국민 My WE:SH 카드</span>
                    </div>
                    <div className="flex justify-center items-center">
                      {true && (
                        <span className="bg-red text-white px-2 py-1 text-center rounded-full block bg-primary-color">
                          30만 원 증정
                        </span>
                      )}
                      <FaAngleRight
                        className="w-6 h-6 cursor-pointer"
                        onClick={() => {
                          router.push(`/cards/${idx}`)
                        }}
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* 추천 카드 더보기 */}
          <Link
            className="bg-white border border-primary-color w-full h-12 my-3 flex justify-center items-center"
            href={'/cards'}
          >
            더 보기
          </Link>
        </div>
        {/* 회사 소개 */}
      </div>
      <Footer />
    </>
  )
}

export default Home
