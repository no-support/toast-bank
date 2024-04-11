import Chart from '@/components/Chart'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const chartData = [
  { date: '2023-01', balance: 12000 },
  { date: '2023-02', balance: 2000 },
  { date: '2023-03', balance: 10000 },
  { date: '2023-04', balance: 5000 },
  { date: '2023-05', balance: 7000 },
  { date: '2023-06', balance: 12000 },
  { date: '2023-07', balance: 3000 },
  { date: '2023-08', balance: 9000 },
  { date: '2023-09', balance: 8000 },
  { date: '2023-10', balance: 7000 },
  { date: '2023-11', balance: 4000 },
  { date: '2023-12', balance: 6000 },
]

function generateMonthlyChartData() {
  return [
    '2023-01-31',
    '2023-02-28',
    '2023-03-31',
    '2023-04-30',
    '2023-05-31',
    '2023-06-30',
    '2023-07-31',
    '2023-08-31',
    '2023-09-30',
    '2023-10-31',
    '2023-11-30',
    '2023-12-31',
  ].map((date) => ({
    date,
    balance: Math.floor(Math.random() * (100000 - 10000 + 1)) + 10000,
  }))
}

const AssetPage = () => {
  const router = useRouter()
  return (
    <div className="p-3">
      <div>
        <Chart chartData={generateMonthlyChartData()} />
      </div>

      <div className="history">
        <div className="font-semibold my-3">입출금 내역</div>

        <ul>
          {[...Array(5)].map((item, idx) => (
            <div className="flex flex-row justify-between" key={idx}>
              <div className="title">
                <p className="font-semibold">홍길동</p>
                <p>2024-03-01 22:10:11</p>
              </div>
              <div className="content">
                <p className="text-primary-color">+12,000원</p>
                <p className="">126,000원</p>
              </div>
            </div>
          ))}
        </ul>

        <Link
          className="bg-white border border-primary-color w-full h-12 my-3 flex justify-center items-center"
          href={'/account'}
        >
          자세히 보기
        </Link>
      </div>
    </div>
  )
}

export default AssetPage
