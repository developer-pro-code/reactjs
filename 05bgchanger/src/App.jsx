import { useState } from 'react'

function App() {
  const [color, setColor] = useState("black")

  return (
    <div className='w-screen h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed bottom-4 bg-white inset-x-14 rounded-full flex flex-wrap justify-between px-4 py-2 text-white'>
        <div className='bg-red-500 px-4 py-2 rounded-4xl hover:cursor-pointer' onClick={() => setColor("red")}>Red</div>
        <div className='bg-green-500 px-4 py-2 rounded-4xl hover:cursor-pointer' onClick={() => setColor("green")}>Green</div>
        <div className='bg-stone-950 px-4 py-2 rounded-4xl hover:cursor-pointer' onClick={() => setColor("brown")}>Brown</div>
        <div className='bg-yellow-500 px-4 py-2 rounded-4xl hover:cursor-pointer' onClick={() => setColor("yellow")}>Yellow</div>
        <div className='bg-purple-500 px-4 py-2 rounded-4xl hover:cursor-pointer' onClick={() => setColor("purple")}>Purple</div>
        <div className='bg-pink-500 px-4 py-2 rounded-4xl hover:cursor-pointer' onClick={() => setColor("pink")}>Pink</div>
        <div className='bg-blue-500 px-4 py-2 rounded-4xl hover:cursor-pointer' onClick={() => setColor("blue")}>Blue</div>
        <div className='bg-zinc-900 px-4 py-2 rounded-4xl hover:cursor-pointer' onClick={() => setColor("grey")}>Zinc</div>
      </div>
    </div>
  )
}

export default App
