import { FiCheckCircle } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { Card } from '@/interface/card'
import { GetServerSidePropsContext } from 'next'
import { useParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import removeHtmlTags from '@/utils/removeHtmlTags'
import { getCard } from '@/remote/card'
import Head from 'next/head'

interface CardDetailPageProps {
  initialCard: Card
}

const CardDetailPage = ({ initialCard }: CardDetailPageProps) => {
  const { id } = useParams()
  const nId = parseInt(id as string)
  const { data } = useQuery({
    queryKey: ['card', id],
    queryFn: () => getCard(nId),
    initialData: initialCard,
  })

  if (data == null) {
    return
  }

  const {
    name,
    corpName,
    tags,
    benefit,
    promotionTitle,
    promotionTerms,
    payback,
  } = data
  const subTitle =
    promotionTitle != null ? removeHtmlTags(promotionTitle) : tags.join(',')

  return (
    <>
      <Head>
        <title>토스트뱅크 | {name}</title>
        <meta property="og:title" content="토스트뱅크" />
        <meta
          property="og:description"
          content="완전히 새로운 은행을 만나보세요"
        />
        <meta property="og:image" content="/thumbnail.png" />
      </Head>
      <div className="p-3">
        <div className="header-section flex flex-col">
          <span className="font-semibold text-text">{name}</span>
          <span className="text-text">{subTitle}</span>
        </div>

        <div className="contents-section">
          <ul className="benefit-list my-6">
            {benefit.map((item, idx) => (
              <motion.li
                className="flex gap-2 "
                key={idx}
                initial={{ opacity: 0, translateX: -90 }}
                transition={{
                  duration: 0.7,
                  ease: 'easeInOut',
                  delay: idx * 0.7,
                }}
                animate={{
                  opacity: 1,
                  translateX: 0,
                }}
              >
                <FiCheckCircle className="text-primary" size={40} />
                <div className="flex flex-col">
                  <span className="font-semibold text-text">혜택{idx + 1}</span>
                  <span className="text-sm text-text">{item}</span>
                </div>
              </motion.li>
            ))}
          </ul>

          {promotionTerms != null && (
            <div className="warning-section flex flex-col mb-6">
              <span className="font-semibold text-text">유의사항</span>
              <span className="text-xs text-text">
                {removeHtmlTags(promotionTerms)}
              </span>
            </div>
          )}

          <div className="apply-section">
            <button className="w-full">1분 만에 신청하고 혜택받기</button>
          </div>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const { id } = context.query
  const nId = parseInt(id as string)
  const card = await getCard(nId)
  return {
    props: {
      initialCard: card,
    },
  }
}

export default CardDetailPage
