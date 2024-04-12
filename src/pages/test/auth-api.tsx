import { useEffect } from 'react'

const NeedAuthPage = () => {
  useEffect(() => {
    const fn = async () => {
      const res = await fetch('/api/hello')
      const data = await res.json()
    }
    fn()
  }, [])
  return <>AuthenticatedPage</>
}

export default NeedAuthPage
