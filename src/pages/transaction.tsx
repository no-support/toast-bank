import { getTransactions } from '@/remote/transaction'
import addDelimiter from '@/utils/addDelimiter'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { format } from 'date-fns'
import { ThreeDots } from 'react-loader-spinner'
import { mainColor } from '@/utils/constant'
const AccountPage = () => {
  const [type, setType] = useState<'all' | 'deposit' | 'withdrawal'>('all')
  const [pageParam, setPageParam] = useState(1)

  const { data: transaction_list, isFetching } = useQuery({
    queryKey: ['transaction', type, pageParam],
    queryFn: () => getTransactions({ type: type, pageParam: pageParam }),
  })

  const handleFilter = (e: React.MouseEvent<HTMLInputElement>) => {
    setType(e.currentTarget.name as 'all' | 'deposit' | 'withdrawal')
  }

  return (
    <>
      <title>토스트뱅크 | 거래내역</title>
      <meta property="og:title" content="토스트뱅크" />
      <meta
        property="og:description"
        content="완전히 새로운 은행을 만나보세요"
      />
      <meta property="og:image" content="/thumbnail.png" />
      <div className="p-3">
        <div className="history">
          <div className="my-3 text-right">
            <input
              type="button"
              name="all"
              value={'전체'}
              className={`cursor-pointer text-text ${type === 'all' ? ' font-semibold' : ''}`}
              onClick={handleFilter}
            />
            <input
              type="button"
              name="deposit"
              value={'입금'}
              className={`cursor-pointer text-text ${type === 'deposit' ? ' font-semibold' : ''}`}
              onClick={handleFilter}
            />
            <input
              type="button"
              name="withdrawal"
              value={'출금'}
              className={`cursor-pointer text-text ${type === 'withdrawal' ? ' font-semibold' : ''}`}
              onClick={handleFilter}
            />
          </div>

          {isFetching && (
            <div>
              <ThreeDots
                height="80"
                width="80"
                color={mainColor}
                ariaLabel="three-dots-loading"
                wrapperClass="justify-center"
              />
            </div>
          )}
          <ul>
            {transaction_list?.data.map((transaction, idx) => (
              <div
                className="flex flex-row justify-between"
                key={transaction.id}
              >
                <div className="title">
                  <p className="font-semibold text-text">
                    {transaction.displayText}
                  </p>
                  <p className="text-sm text-text">
                    {format(transaction.date, 'yyyy-MM-dd HH:mm:ss')}
                  </p>
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
                    {addDelimiter(transaction.amount)}원
                  </p>
                </div>
              </div>
            ))}
          </ul>

          <div className="flex flex-row justify-between items-center mt-3 mb-1">
            <button
              onClick={() => {
                setPageParam((state) => state - 1)
              }}
              disabled={pageParam === 1}
            >
              이전 페이지
            </button>
            <span className="text-text">{pageParam} 페이지</span>
            <button
              onClick={() => {
                setPageParam((state) => state + 1)
              }}
              disabled={transaction_list?.nextPage == null}
            >
              다음 페이지
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AccountPage
