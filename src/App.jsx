import { useState } from 'react'
import Memebody from './components/memebody'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Memebody />
      </div>
    </>
  )
}

export default App
