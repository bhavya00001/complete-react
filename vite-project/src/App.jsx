import { useState } from 'react'
import ChangeColor from './components/ChangeColor'
// import './App.css'
// import Card from "./components/Card"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      {/* <Card /> */}
      <ChangeColor/>
    </div>
    </>

  )
}

export default App
