import { FiCheckCircle } from 'react-icons/fi'
import { motion } from 'framer-motion'
const Card = () => {
  return (
    <div className="p-3">
      <div className="header-section flex flex-col">
        <span className="font-semibold">KB국민카드 KB국민 My:WE:SH 카드</span>
        <span>신규회원 연회비 100% 캐시백</span>
      </div>

      <div className="contents-section">
        <ul className="benefit-list my-6">
          {[...Array(5)].map((item, idx) => (
            <motion.li
              className="flex gap-2 "
              key={item}
              initial={{ opacity: 0, translateX: -90 }}
              transition={{
                duration: 0.7,
                ease: 'easeInOut',
                delay: idx * 0.7,
              }}
              animate={{
                opacity: 1,
                translateX: 0,
              }}
            >
              <FiCheckCircle className="bg-primary-color" size={40} />
              <div className="flex flex-col">
                <span className="font-semibold">혜택1</span>
                <span className="text-sm">마트/편의점 10% 할인</span>
              </div>
            </motion.li>
          ))}
        </ul>

        <div className="warning-section flex flex-col mb-6">
          <span className="font-semibold">유의사항</span>
          <span className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            corrupti dolor obcaecati, animi ut, facilis dicta suscipit vero qui
            quae dolores. Ratione similique distinctio quasi dolores culpa atque
            soluta eaque! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quibusdam corrupti dolor obcaecati, animi ut, facilis dicta
            suscipit vero qui quae dolores. Ratione similique distinctio quasi
            dolores culpa atque soluta eaque! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quibusdam corrupti dolor obcaecati,
            animi ut, facilis dicta suscipit vero qui quae dolores. Ratione
            similique distinctio quasi dolores culpa atque soluta eaque!
          </span>
        </div>

        <div className="apply-section">
          <button className="w-full">1분 만에 신청하고 혜택받기</button>
        </div>
      </div>
    </div>
  )
}

export default Card
