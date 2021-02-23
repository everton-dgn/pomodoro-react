import React, { useState } from 'react'

interface ButtonParams {
  children: string
}

export const Button = ({ children }: ButtonParams) => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <>
      <button onClick={increment}>
        {children} {count}
      </button>
    </>
  )
}
