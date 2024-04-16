import { Faq } from '@/interface/faq'
import prisma from '@/lib/db'
import { oneDay } from '@/utils/constant'

const FaqPage = ({ faqs }: { faqs: Faq[] }) => {
  return (
    <>
      <title>토스트뱅크 | FAQ</title>
      <meta property="og:title" content="토스트뱅크" />
      <meta
        property="og:description"
        content="완전히 새로운 은행을 만나보세요"
      />
      <meta property="og:image" content="/thumbnail.png" />
      <div className="p-3 space-y-2">
        <ol>
          {faqs.map((faq, idx) => (
            <li key={idx} className="m-6 ">
              <details
                className="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg"
                open
              >
                <summary className="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
                  {faq.question}
                </summary>
                <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  <p>{faq.answer}</p>
                </div>
              </details>
            </li>
          ))}
        </ol>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const faqs: Faq[] = await prisma.faq.findMany()
  return {
    props: { faqs: faqs },
    revalidate: oneDay,
  }
}
export default FaqPage
