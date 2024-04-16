import Map from '@/components/Map'
import Head from 'next/head'

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>토스트뱅크 | 오시는 길</title>
        <meta property="og:title" content="토스트뱅크" />
        <meta
          property="og:description"
          content="완전히 새로운 은행을 만나보세요"
        />
        <meta property="og:image" content="/thumbnail.png" />
      </Head>
      <div className="p-3 space-y-2 bg-background">
        <div className="title font-semibold flex justify-start items-center text-text">
          오시는 길
        </div>
        <Map />
        <table className="w-full border-separate border-spacing-y-4">
          <tbody className="text-center">
            <tr className="address">
              <td className="text-gray-400 w-1/6">주소</td>
              <td className="w-5/6 text-text">
                대한민국 서울특별시 강남구 테헤란로 131, 13층
              </td>
            </tr>
            <tr className="tel">
              <td className="text-gray-400 w-1/6">전화</td>
              <td className="w-5/6 text-text">1661-7654</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default AboutPage
