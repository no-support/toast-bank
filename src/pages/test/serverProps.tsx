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
  console.log('serverProps.tsx - typeof date: ', typeof date)
  return { props: { now: date.toLocaleTimeString() } }
}
export default ServerProps
