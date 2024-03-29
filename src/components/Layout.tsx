import Link from 'next/link'

const Layout = () => {
  return (
    <div className="flex justify-between items-center w-full h-12 border-b border-gray-300">
      <div className="ml-3">
        <Link href={'/'} className="text-lg text-toast-blue">
          Toast Bank
        </Link>
      </div>
      <div className="mr-3">
        <button className="p-2 bg-toast-blue rounded-md text-white">
          로그인/회원가입
        </button>
      </div>
    </div>
  )
}

export default Layout
