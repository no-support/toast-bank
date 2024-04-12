import { useRouter } from 'next/navigation'

const ServerProps = ({ now }: any) => {
  return (
    <>
      serverProps page
      <pre>{now}</pre>
    </>
  )
}

export const getServerSideProps = async () => {
  const date = new Date()
  return { props: { now: date.toLocaleTimeString() } }
}
export default ServerProps
