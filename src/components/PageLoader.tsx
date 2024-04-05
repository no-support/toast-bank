import Image from 'next/image'

function PageLoader({ message }: { message?: string }) {
  return (
    <div className="flex h-[calc(100vh-3rem)] justify-center items-center">
      <div className="flex flex-col items-center">
        <Image
          width={120}
          height={120}
          src="https://cdn.pixabay.com/animation/2023/06/13/15/12/15-12-47-323_512.gif"
          alt="로딩 이미지"
        />
        {message != null ? (
          <>
            <div className=""></div>
            <p className="mt-10">{message}</p>
          </>
        ) : null}
      </div>
    </div>
  )
}

export default PageLoader
