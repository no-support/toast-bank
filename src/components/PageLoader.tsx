/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
function PageLoader({ message }: { message?: string }) {
  return (
    <div className="flex fixed inset-0 justify-center items-center">
      <div className="flex flex-col items-center">
        <img
          width={120}
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
