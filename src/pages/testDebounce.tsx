import React, { useState } from 'react'
import useDebounce from '@/hooks/useDebounce'

const TestDebounce = () => {
  const [inputValue, setInputValue] = useState('')
  const debouncedValue = useDebounce(inputValue, 500) // 500밀리초(0.5초) 후에 업데이트

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>Debounced Value: {debouncedValue}</p>
    </div>
  )
}

export default TestDebounce
