import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)
  
  const addCount =() => {
    if(count < 20){
    setCount(count + 1)
    }else{
      alert("Limit Exceeded !!")
    }
  }
  const removeCount = () => {
    if(count >= 1){
    setCount(count - 1)
    }else{
      alert("Negative value not allowed !!")
    }
  }

  return (
    <>
      <h1>Counter Practice: {count}</h1>
      <div className="card">
        <button onClick={addCount}>
        Add Count</button>
        <button onClick={removeCount}>
        Remove Count</button>
      </div>
    </>
  )
}

export default App
