const Account = () => {
  return (
    <div className="p-3">
      <div className="history">
        <div className="my-3 text-right font-semibold space-x-2">
          <span>전체</span>
          <span>입금</span>
          <span>출금</span>
        </div>

        <ul>
          {[...Array(5)].map((item, idx) => (
            <div className="flex flex-row justify-between " key={idx}>
              <div className="title">
                <p className="font-semibold">홍길동</p>
                <p>2024-03-01 22:10:11</p>
              </div>
              <div className="content">
                <p className="text-toast-blue">+12,000원</p>
                <p className="text-red-400">126,000원</p>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Account
