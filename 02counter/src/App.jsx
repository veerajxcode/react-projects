import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)
  
  const addValue = () => {
    setCounter(counter + 1)
  }
  const decreaseValue = () => {
    setCounter(counter - 1)
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Count value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br/>
      <button onClick={decreaseValue}>Remove Value</button>
    </>
  )
}

export default App
