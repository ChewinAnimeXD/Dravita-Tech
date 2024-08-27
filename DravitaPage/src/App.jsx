import { useState } from 'react'
import './App.css'
import Principal from './pages/Principal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Principal></Principal>
    </>
  )
}

export default App
