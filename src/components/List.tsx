import { memo } from 'react'

let arr: number[] = []

for (let i = 0; i < 10000; i++) {
  arr.push(i)
}
const List = ({ keyword = '' }: { keyword: string }) => {
  console.log(keyword)

  const filteredList = arr.filter((item) => String(item).includes(keyword))

  return (
    <ul>
      {filteredList.map((item, idx) => (
        <li key={idx}>item: {item}</li>
      ))}
    </ul>
  )
}

export default memo(List)
