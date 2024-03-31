import Link from 'next/link'
import Button from './Button'

const Layout = () => {
  return (
    <nav className="flex justify-between items-center w-full h-12 border-b border-gray-300 px-3">
      <div>
        <Link href={'/'} className="text-lg text-toast-blue">
          Toast Bank
        </Link>
      </div>
      <div>
        {/* <Button onClick={() => { } }>로그인/회원가입</Button> */}
        <Link
          href={'/signin'}
          className="p-2 bg-toast-blue rounded-md text-white "
        >
          로그인/회원가입
        </Link>
      </div>
    </nav>
  )
}

export default Layout
