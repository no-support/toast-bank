import { ReactNode, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setThemeColor } from '@/store/themeSlice'

interface ThemeInitializerProps {
  children: ReactNode
}

const ThemeInitializer = ({ children }: ThemeInitializerProps) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const themeColorLocalStorage = localStorage.getItem('themeColor')

      if (themeColorLocalStorage) {
        dispatch(setThemeColor(themeColorLocalStorage))
      }
    }
  }, [dispatch])

  return children
}

export default ThemeInitializer
