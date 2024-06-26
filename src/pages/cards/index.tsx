import InfiniteScroll from 'react-infinite-scroll-component'
import { useRouter } from 'next/navigation'
import { FaAngleRight } from 'react-icons/fa'
import { QueryClient, dehydrate, useInfiniteQuery } from '@tanstack/react-query'
import { useCallback } from 'react'
import { ThreeDots } from 'react-loader-spinner'
import { mainColor } from '@/utils/constant'
import Badge from '@/components/Badge'
import Top from '@/components/Top'
import { getCards } from '@/remote/card'
import Head from 'next/head'

const CardsPage = () => {
  const router = useRouter()

  const {
    data,
    error,
    status,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    isFetching,
  } = useInfiniteQuery({
    queryKey: ['cards'],
    queryFn: getCards,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  })
  const loadMore = useCallback(() => {
    if (hasNextPage === false || isFetching) {
      return
    }
    fetchNextPage()
  }, [hasNextPage, fetchNextPage, isFetching])

  const cards = data?.pages.map(({ data }) => data).flat()

  if (data == null) {
    return null
  }

  return (
    <>
      <Head>
        <title>토스트뱅크 | 추천 카드</title>
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
          <input
            onFocus={() => {
              router.push('/cards/search')
            }}
          />
        </div>

        <InfiniteScroll
          dataLength={cards ? cards.length : 0}
          hasMore={hasNextPage}
          loader={
            <ThreeDots
              height="80"
              width="80"
              color={mainColor}
              ariaLabel="three-dots-loading"
              wrapperClass="justify-center"
            />
          }
          next={loadMore}
        >
          <ul>
            {cards &&
              cards.map((card, idx) => (
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
        </InfiniteScroll>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const client = new QueryClient()

  await client.prefetchInfiniteQuery({
    queryKey: ['cards'],
    queryFn: getCards,
    initialPageParam: 1,
  })
  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(client))),
    },
  }
}

export default CardsPage
