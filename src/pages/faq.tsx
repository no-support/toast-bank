import { Faq } from '@/interface/faq'
import axios from 'axios'
import { revalidateTag } from 'next/cache'

const FaqPage = ({ faqs }: { faqs: Faq[] }) => {
  return (
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
  )
}

export async function getStaticProps() {
  const faqs = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/faq`)
  return {
    props: { faqs: faqs.data },
    revalidate: 60 * 60 * 24, // 24시간
  }
}
export default FaqPage
