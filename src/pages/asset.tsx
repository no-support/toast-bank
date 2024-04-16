import Chart from '@/components/Chart'
import { getRecentTransaction } from '@/remote/transaction'
import { GetServerSidePropsContext } from 'next'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { authOptions } from './api/auth/[...nextauth]'
import { Transaction } from '@/interface/transaction'
import { format } from 'date-fns'
import addDelimiter from '@/utils/addDelimiter'

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
interface AssetPageProps {
  transactions: Transaction[]
}
const AssetPage = ({ transactions }: AssetPageProps) => {
  const router = useRouter()
  return (
    <div className="p-3">
      <div>
        <Chart chartData={generateMonthlyChartData()} />
      </div>

      <div className="history">
        <div className="font-semibold my-3 text-text">입출금 내역</div>

        <ul>
          {transactions.map((transaction) => (
            <div className="flex flex-row justify-between" key={transaction.id}>
              <div className="title">
                <p className="font-semibold text-text">
                  {transaction.displayText}
                </p>
                <p className="text-text">
                  {format(transaction.date, 'yy-MM-dd HH:mm:ss')}
                </p>
                <p></p>
              </div>
              <div className="content flex flex-col items-end">
                <p
                  className={
                    transaction.type === 'deposit'
                      ? 'text-primary'
                      : 'text-red-500'
                  }
                >
                  {transaction.type === 'deposit' ? '+' : '-'}
                  {addDelimiter(transaction.amount)}원
                </p>
                <p className="text-text">
                  {addDelimiter(transaction.balance)}원
                </p>
              </div>
            </div>
          ))}
        </ul>

        <Link
          className="bg-white border border-primary w-full h-12 my-3 flex justify-center items-center"
          href={'/transaction'}
        >
          자세히 보기
        </Link>
      </div>
    </div>
  )
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const { req, res } = context
  const session = await getServerSession(req, res, authOptions)
  if (!session) {
    return { props: {} }
  }
  const transactions = await getRecentTransaction(session.user.email)
  return {
    props: { transactions: JSON.parse(JSON.stringify(transactions)) },
  }
}
export default AssetPage
