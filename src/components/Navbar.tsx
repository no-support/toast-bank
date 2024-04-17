import { toggleThemeColor } from '@/store/themeSlice'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { CiDark, CiLight } from 'react-icons/ci'
import { RootState } from '@/store'
import { useEffect } from 'react'

const Navbar = () => {
  const themeColor = useSelector((state: RootState) => state.theme.themeColor)
  const dispatch = useDispatch()

  const handleToggle = () => {
    dispatch(toggleThemeColor())
  }

  const { status } = useSession()

  useEffect(() => {
    document.body.className = themeColor
  }, [themeColor])

  return (
    <nav className="flex justify-between items-center w-full h-12 border-b border-gray-300 px-3 bg-background">
      <div>
        <Link href={'/'} className="text-lg text-primary">
          Toast Bank
        </Link>
      </div>
      <div className="flex flex-row justify-center items-center gap-3">
        {themeColor === 'light' ? (
          <CiLight
            className={`w-6 h-6 cursor-pointer text-text`}
            onClick={handleToggle}
          />
        ) : (
          <CiDark
            className={`w-6 h-6 cursor-pointer text-text`}
            onClick={handleToggle}
          />
        )}

        {status === 'loading' ? null : status === 'authenticated' ? (
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
            className="p-2 bg-primary rounded-md text-white "
          >
            로그인/회원가입
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar
