import { Transaction } from '@/interface/transaction'
import { getBalance, getRecentTransaction } from '@/remote/transaction'
import { GetServerSidePropsContext } from 'next'
import { format } from 'date-fns'

const seoulTimeZone = 'Asia/Seoul'

interface RemotePageProps {
  transactions: Transaction[]
}

const RemotePage = ({ transactions }: RemotePageProps) => {
  return (
    <>
      {transactions.map((transaction) => (
        <div key={transaction.id}>
          <p>{transaction.displayText}</p>
          <p>{format(transaction.date, 'yyyy-MM-dd HH:mm:ss')}</p>
        </div>
      ))}
    </>
  )
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const transactions = await getRecentTransaction('user1@email.com')
  const balance = await getBalance('user1@email.com')
  console.log(balance)
  return {
    // Transaction 타입 중 date: Date 때문에 stringify & parse
    props: { transactions: JSON.parse(JSON.stringify(transactions)) },
  }
}

export default RemotePage
