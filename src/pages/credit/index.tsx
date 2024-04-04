import CreditScoreGauge from '@/components/CreditScoreGauge'
import Modal from '@/components/Modal'
import { useState } from 'react'

const Credit = () => {
  // TODO: 신용 조회가 완료되었으면 점수를 게이지에 보여줄 것
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="p-3">
      <div className="gauge-section flex flex-col items-center mb-8">
        <span className="font-semibold text-center mb-4">
          내 신용 점수를 <br /> 조회하고 관리해보세요
        </span>
        <div className="h-32">
          <CreditScoreGauge score={0}></CreditScoreGauge>
        </div>
      </div>

      <div className="introduce-section">
        <div className="flex flex-col mb-4">
          <span className="font-semibold">정확한 신용평점</span>
          <span>대표 신용평가 기관의 데이터로 관리해요</span>
        </div>
        <div className="flex flex-col mb-4">
          <span className="font-semibold">신용 점수 무료 조회</span>
          <span>신용 점수에 영향 없이 무료로 조회가 가능해요</span>
        </div>
      </div>

      <div className="retrieve-section">
        <button
          className="w-[calc(100%-1.5rem)] absolute bottom-3"
          onClick={openModal}
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
        ></Modal>
      </div>
    </div>
  )
}

export default Credit
