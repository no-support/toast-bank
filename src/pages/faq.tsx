import { faq_list } from '@/mock/faq'

type faq = (typeof faq_list)[number]

const Faq = ({ faq_list }: { faq_list: faq[] }) => {
  return (
    <div className="p-3 space-y-2">
      <ol>
        {faq_list.map((faq, idx) => (
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
  return {
    props: { faq_list },
  }
}
export default Faq
