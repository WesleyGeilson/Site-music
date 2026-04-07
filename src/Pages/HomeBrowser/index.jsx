import { useState } from 'react'
import './style.css'

function home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Olá MUNDO </h1>
      <p>Contagem: {count}</p>
    </>
  )
}

export default home
