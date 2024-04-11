import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

const Navbar = () => {
  const { status } = useSession()

  return (
    <nav className="flex justify-between items-center w-full h-12 border-b border-gray-300 px-3">
      <div>
        <Link href={'/'} className="text-lg text-primary-color">
          Toast Bank
        </Link>
      </div>
      <div>
        {status === 'authenticated' ? (
          <button
            onClick={() => {
              signOut()
            }}
          >
            로그아웃
          </button>
        ) : (
          <Link
            href={'/signin'}
            className="p-2 bg-primary-color rounded-md text-white "
          >
            로그인/회원가입
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar
