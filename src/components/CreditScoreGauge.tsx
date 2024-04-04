import addDelimiter from '@/utils/addDelimiter'
import { useRef, useEffect, useState } from 'react'
import { mainColor } from '@/utils/constant'

const MAX_CREDIT_SCORE = 1000

interface CreditScoreGaugeProps {
  width?: number
  height?: number
  score: number
}

function CreditScoreGauge({
  score,
  width = 100,
  height = 100,
}: CreditScoreGaugeProps) {
  const pathRef = useRef<SVGPathElement>(null)
  const [totalLenght, setTotalLength] = useState(0)

  useEffect(() => {
    if (pathRef.current) {
      setTotalLength(pathRef.current.getTotalLength())
    }
  }, [])

  const dashoffset = totalLenght - (score / MAX_CREDIT_SCORE) * totalLenght

  return (
    <div className={`w-[${width}px] h-[${height}px] relative`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 223 164"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 회색 배경 경로 */}
        <path
          ref={pathRef}
          d="M18.421 154C12.3741 140.971 9 126.458 9 111.159C9 54.7382 54.8908 9 111.5 9C168.109 9 214 54.7382 214 111.159C214 126.458 210.626 140.971 204.579 154"
          stroke="#f3f4f6"
          strokeWidth="18"
          strokeLinecap="round"
        ></path>
        {/* 파란색 경로 */}
        <path
          d="M18.421 154C12.3741 140.971 9 126.458 9 111.159C9 54.7382 54.8908 9 111.5 9C168.109 9 214 54.7382 214 111.159C214 126.458 210.626 140.971 204.579 154"
          stroke={mainColor}
          strokeWidth="18"
          strokeLinecap="round"
          // 전체 길이
          strokeDasharray={totalLenght}
          // 움직일 길이
          strokeDashoffset={dashoffset}
        ></path>
      </svg>
      <span className="font-semibold absolute bottom-1/4 -translate-x-1/2 left-1/2 text-lg">
        {score === 0 ? '???' : addDelimiter(score)}
      </span>
    </div>
  )
}

export default CreditScoreGauge
