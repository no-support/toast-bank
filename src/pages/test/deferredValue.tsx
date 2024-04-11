import List from '@/pages/test/List'
import { useDeferredValue, useState } from 'react'

const TestDeferredValue = () => {
  const [text, setText] = useState('')
  const deferredValue = useDeferredValue(text)

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value)
        }}
      />

      <List keyword={deferredValue}></List>
    </>
  )
}

export default TestDeferredValue
