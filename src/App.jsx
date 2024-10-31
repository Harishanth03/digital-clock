import { useState } from 'react'
import './App.css'

function App() {

  const [currentTime , setCurrentTime] = useState(new Date);

  return (
    <>
      <div className="digital-clock">

        <h1>Digital Clock</h1>

        <div className="time">11:59:59 Am</div>

        <div className="date">Thursday , October 31, 2024</div>
      </div>
    </>
  )
}

export default App
