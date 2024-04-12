import { useRouter } from 'next/navigation'

const Router = () => {
  const router = useRouter()
  const handleClick = () => {
    router.back()
  }

  return (
    <>
      router page.
      <button onClick={handleClick}>click</button>
    </>
  )
}

export default Router
