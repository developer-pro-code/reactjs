import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <div className='flex gap-2'>

        <Card imgSrc="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWJ4OHNmaG55YmlyNGZuaDcybGw2YW5seDBpaGg3a3ZuMTRpcTd1YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ho0xXatV7b3Fo1ZRXN/giphy.gif" price={23}/>

        <Card imgSrc="https://media4.giphy.com/media/1gbqIc1fK8QgR3bHL7/giphy.gif?cid=790b7611a2f696d51a46ce892e420e77735707466a4abd3b&rid=giphy.gif&ct=g" price={45}/>

        <Card imgSrc="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDd1bGcwcnk4d2ZvbzhvMWZoZmZyd295c2k2ZWNvbnFqZ3NkaDZmayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IiuZjA4RQUKIf5TbMi/giphy.gif" price={69}/>

      </div>
    </>
  )
}

export default App
