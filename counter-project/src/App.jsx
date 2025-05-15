import { useState } from 'react'

//we cannot directly update the values on webpage like js. we have to use hooks to do so
import './App.css'

function App() {

  const [count, setCount] = useState(15)

  const addVal = () => {
    if(count == 20){
      return
    }
    setCount((count) => count+1)
    console.log(count)
  }
  const rmVal = () => {
    if(count == 0){
      return
    }
    setCount((count) => count-1)
    console.log(count)
  }
  
  return (
    <>
     <h1>Chai and Aditya</h1>
     <h2>Counter Value: {count}</h2>

     <button onClick={addVal}>Increase value</button>
     <button onClick={rmVal}>Decrease Value</button>
    </>
  )
}

export default App
