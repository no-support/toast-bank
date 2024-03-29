import React from 'react'

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-32 flex justify-between items-center bg-blue-300 border-b-2 border-b-gray-300 px-3">
      {children}
    </div>
  )
}

export default Container
