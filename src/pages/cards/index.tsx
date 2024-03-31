import { Router } from 'next/router'
import { useRouter } from 'next/navigation'

import { FaAngleRight } from 'react-icons/fa'

const Cards = () => {
  const router = useRouter()

  return (
    <div className="w-full p-3">
      <div className="header">
        <div>
          <span className="font-semibold">추천 카드</span>
        </div>
        <div>
          <span>회원님을 위해 준비했어요</span>
        </div>
      </div>

      <div className="search-section">
        <input type="text" />
      </div>

      <ul className="list-section space-y-2">
        {[...Array(10)].map((item, idx) => (
          <li key={idx}>
            <div className="item h-16 flex justify-between items-center">
              <div className="flex flex-col justify-around">
                <span className="font-semibold">1위</span>
                <span>KB국민 My WE:SH 카드</span>
              </div>
              <div className="flex justify-center items-center">
                {true && (
                  <span className="bg-red text-white px-2 py-1 text-center rounded-full block bg-toast-blue">
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
  )
}

export default Cards
