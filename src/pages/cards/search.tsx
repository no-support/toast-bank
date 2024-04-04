import { useRouter } from 'next/router'
import { useRef, useEffect, useState, useCallback, ChangeEvent } from 'react'
import { useQuery } from '@tanstack/react-query'

import { getSearchCards } from '@/pages/api/card'

import useDebounce from '@/hooks/useDebounce'
import Top from '@/components/Top'
import { FaAngleRight } from 'react-icons/fa'
import Badge from '@/components/Badge'

const Search = () => {
  const [keyword, setKeyword] = useState('')
  const debouncedKeyword = useDebounce(keyword)

  const router = useRouter()

  const inputRef = useRef<HTMLInputElement>(null)

  const { data } = useQuery({
    queryKey: ['cards', debouncedKeyword],
    queryFn: () => getSearchCards(debouncedKeyword),
    enabled: debouncedKeyword !== '',
  })

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const handleKeyword = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
  }, [])

  return (
    <div className="w-full p-3">
      <Top title="추천 카드" subTitle="회원님을 위해 준비했어요" />
      <div className="py-3">
        <input ref={inputRef} value={keyword} onChange={handleKeyword} />
      </div>

      {keyword !== '' && data?.length === 0 ? (
        <div className="p-6">
          <span>찾으시는 카드가 없습니다</span>
        </div>
      ) : (
        <ul>
          {data?.map((card, idx) => (
            <li
              // TODO: card.id로 변경
              key={idx}
            >
              <div className="item h-16 flex justify-between items-center">
                <div className="flex flex-col justify-around">
                  <span className="font-semibold">{`${idx + 1}`}위</span>
                  <span>{card.name}</span>
                </div>
                <div className="flex justify-center items-center">
                  {card.payback && <Badge text={`${card.payback}`} />}
                  <FaAngleRight
                    className="w-6 h-6 cursor-pointer"
                    onClick={() => {
                      router.push(`/cards/${idx}`)
                    }}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Search
