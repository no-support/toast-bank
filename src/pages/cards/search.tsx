import { useRouter } from 'next/router'
import { useRef, useEffect, useState, useCallback, ChangeEvent } from 'react'
import { useQuery } from '@tanstack/react-query'

import { getSearchCards } from '@/remote/card'

import useDebounce from '@/hooks/useDebounce'
import Top from '@/components/Top'
import { FaAngleRight } from 'react-icons/fa'
import Badge from '@/components/Badge'
import Head from 'next/head'

const SearchPage = () => {
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
    <>
      <Head>
        <title>토스트뱅크 | 카드 검색</title>
        <meta property="og:title" content="토스트뱅크" />
        <meta
          property="og:description"
          content="완전히 새로운 은행을 만나보세요"
        />
        <meta property="og:image" content="/thumbnail.png" />
      </Head>

      <div className="w-full p-3 bg-background">
        <Top title="추천 카드" subTitle="회원님을 위해 준비했어요" />
        <div className="py-3">
          <input ref={inputRef} value={keyword} onChange={handleKeyword} />
        </div>

        {keyword !== '' && data?.length === 0 ? (
          <div className="p-6">
            <span className="text-text">찾으시는 카드가 없습니다</span>
          </div>
        ) : (
          <ul>
            {data?.map((card, idx) => (
              <li key={card.id}>
                <div
                  className="item h-16 flex justify-between items-center cursor-pointer"
                  onClick={() => {
                    router.push(`/cards/${card.id}`)
                  }}
                >
                  <div className="flex flex-col justify-around">
                    <span className="font-semibold text-text">
                      {`${card.id}`}위
                    </span>
                    <span className="text-text">{card.name}</span>
                  </div>
                  <div className="flex justify-center items-center">
                    {card.payback && <Badge text={`${card.payback}`} />}
                    <FaAngleRight className="w-6 h-6 text-text" />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  )
}

export default SearchPage
