import Head from 'next/head'

export default function _404Page() {
  return (
    <>
      <Head>
        <title>토스트뱅크 | 404</title>
        <meta property="og:title" content="토스트뱅크" />
        <meta
          property="og:description"
          content="완전히 새로운 은행을 만나보세요"
        />
        <meta property="og:image" content="/thumbnail.png" />
      </Head>
      <div className="flex justify-center items-center absolute top-12 left-0 right-0 bottom-0">
        <div className="p-3 text-center">
          <p className="text-text">
            페이지를 찾을 수 없습니다. <br /> url을 확인해주세요.
          </p>
        </div>
      </div>
    </>
  )
}
