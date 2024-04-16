import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const TestConfetti = () => {
  const result = useQuery({
    queryKey: ['confetti'],
    queryFn: async () => {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/todos/1',
      )
      return data
    },
  })
  return (
    <>
      <div className="flex justify-center">
        {/* <ConfettiExplosion /> */}
        <div style={{ width: 1000, background: 'beige' }}>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      </div>
    </>
  )
}

export default TestConfetti
