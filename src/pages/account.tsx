import { transaction_list } from '@/mock/transaction'

const AccountPage = () => {
  return (
    <div className="p-3">
      <div className="history">
        <div className="my-3 text-right font-semibold">
          <input
            type="button"
            value={'전체'}
            className="cursor-pointer text-text"
            onClick={() => {
              alert('clicked')
            }}
          />
          <input
            type="button"
            value={'입금'}
            className="cursor-pointer text-text"
            onClick={() => {
              alert('clicked')
            }}
          />
          <input
            type="button"
            value={'출금'}
            className="cursor-pointer text-text"
            onClick={() => {
              alert('clicked')
            }}
          />
        </div>

        <ul>
          {transaction_list.map((transaction, idx) => (
            <div className="flex flex-row justify-between" key={idx}>
              <div className="title">
                <p className="font-semibold text-text">
                  {transaction.displayText}
                </p>
                <p className="text-sm text-text">{transaction.date}</p>
              </div>
              <div className="content flex flex-col items-end">
                <p className="text-red-500">+{transaction.amount}원</p>
                <p className="text-text">{transaction.amount}원</p>
              </div>
            </div>
          ))}
        </ul>

        <div className="flex flex-row justify-between items-center mt-3 mb-1">
          <button onClick={() => {}}>이전</button>
          <span className="text-text">1 페이지</span>
          <button onClick={() => {}}>다음</button>
        </div>
      </div>
    </div>
  )
}

export default AccountPage
