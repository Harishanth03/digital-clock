import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {

  const [currentTime , setCurrentTime] = useState(new Date);

  useEffect(() => {

    const timer = setInterval(() => {

      setCurrentTime(new Date);

    }, 1000);

    return() => clearInterval(timer);

  },[]);

  const formatHour = (hour) => {

    return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;

  }

  const formatTimeWithero = (num) => {

    return num < 10 ? `0${num}` : num;

  };

  const formatDate = (date) => {

    const Option = {weekday : "long" , year : "numeric" , month : "long" , day : "numeric"}

    return date.toLocaleDateString(undefined , Option);

  }

  return (
    <>
      <div className="digital-clock">

        <h1>Digital Clock</h1>

        <div className="time">{formatTimeWithero(formatHour(currentTime.getHours()))} : {formatTimeWithero(currentTime.getMinutes())} : {formatTimeWithero(currentTime.getSeconds())} {currentTime.getHours() >= 12 ? "PM" : "AM"}</div>

        <div className="date">{formatDate(currentTime)}</div>
      </div>
    </>
  )
}

export default App
