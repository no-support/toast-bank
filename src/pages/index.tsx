import Button from '@/components/Button'
import Container from '@/components/Container'
import CreditScoreGauge from '@/components/CreditScoreGauge'
import Link from 'next/link'
import { FaAngleRight } from 'react-icons/fa'
const index = () => {
  return (
    <>
      {/* 자산 */}
      {true && (
        <Container>
          <div className="flex flex-col justify-center h-full">
            <span className="text-gray-500">홍길동 회원님의 자산</span>
            <span className="font-bold text-lg">127,000원</span>
          </div>
          <Button>분석</Button>
        </Container>
      )}
      {/* 신용 점수 */}
      <Container>
        <div className="flex flex-col justify-center h-full gap-3">
          <span className="font-bold">
            나의 신용도를 증명하고
            <br />
            점수를 올리세요
          </span>
          <Button>내 신용점수 보러가기</Button>
        </div>
        <div>
          <CreditScoreGauge score={100}></CreditScoreGauge>
        </div>
      </Container>
      {/* 추천 카드 */}
      <div className="recommend-card px-3">
        {/* 추천 카드 헤더 */}
        <div className="header w-full h-12 flex justify-between items-center">
          <span className="font-bold">추천 카드</span>
        </div>
        {/* 추천 카드 콘텐츠 */}
        <div className="contents">
          <div className="item h-16 flex justify-between items-center">
            <div className="flex flex-col justify-around">
              <span className="font-bold">1위</span>
              <span>KB국민 My WE:SH 카드</span>
            </div>
            <div className="flex justify-center items-center">
              {true && (
                <span className="bg-red text-white px-2 py-1 text-center rounded-full block bg-toast-blue">
                  30만 원 증정
                </span>
              )}
              <FaAngleRight className="w-6 h-6 cursor-pointer" />
            </div>
          </div>
          <div className="item h-16 flex justify-between items-center">
            <div className="flex flex-col justify-around">
              <span className="font-bold">1위</span>
              <span>KB국민 My WE:SH 카드</span>
            </div>
            <div>
              <FaAngleRight className="w-6 h-6 cursor-pointer" />
            </div>
          </div>
          <div className="item h-16 flex justify-between items-center">
            <div className="flex flex-col justify-around">
              <span className="font-bold">1위</span>
              <span>KB국민 My WE:SH 카드</span>
            </div>
            <div>
              <FaAngleRight className="w-6 h-6 cursor-pointer" />
            </div>
          </div>
        </div>
        {/* 추천 카드 더보기 */}
        <button className="bg-white border border-toast-blue w-full h-12">
          더 보기
        </button>
      </div>
      {/* 회사 소개 */}
      <footer className="flex flex-col p-3 bg-gray-300 mt-3">
        <span className="font-bold">(주) 토스트 뱅크</span>
        <Link href={'/about'} className="text-toast-blue">
          오시는 길
        </Link>
        <span className="text-white">
          Copyright Toast Bank. All rights reserved.
        </span>
      </footer>
    </>
  )
}

export default index
