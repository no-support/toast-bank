import { transaction_list } from '@/mock/transaction'

const AccountPage = () => {
  return (
    <div className="p-3">
      <div className="history">
        <div className="my-3 text-right font-semibold space-x-2">
          <span>전체</span>
          <span>입금</span>
          <span>출금</span>
        </div>

        <ul>
          {transaction_list.map((transaction, idx) => (
            <div className="flex flex-row justify-between " key={idx}>
              <div className="title">
                <p className="font-semibold">{transaction.displayText}</p>
                <p className="text-sm">{transaction.date}</p>
              </div>
              <div className="content flex flex-col items-end">
                <p className="text-red-400">+{transaction.amount}원</p>
                <p className="">{transaction.amount}원</p>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default AccountPage
