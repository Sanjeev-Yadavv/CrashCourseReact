import React, { useRef, useState,useEffect } from 'react';

const TimerComponent = () => {
    const [time, setTime] = useState(60)
    const intervalRef = useRef(null);
    const progressBarRef = useRef(null);
    const durationRef = useRef(null)
    const [duration, setDuration] = useState(60)
    const messageRef = useRef(false)
    console.log(intervalRef , 'intervalRef')

   
    useEffect(()=>{
        if(progressBarRef.current){
            const progressPercentage = (time/duration)*100;
            progressBarRef.current.style.width = `${progressPercentage}%`
        }
        if(progressBarRef.current){
            progressBarRef.current.style.backgroundColor = time<10? 'red' : '#76c7c0'
        }
        if(time==0){
            messageRef.current = true
        }

    },[time,duration])

   const startTimer = ()=>{
    if(intervalRef.current !== null) return;
    intervalRef.current = setInterval(()=>{
        setTime((prevTime)=> (prevTime>0? prevTime-1:0))
    },1000)
    console.log(intervalRef.current , 'intervalRef')

   }
   const pauseTimer = ()=>{
    clearInterval(intervalRef.current)
    intervalRef.current = null
    console.log(intervalRef.current , 'intervalRef')

   }

   const resetTimer = ()=>{
    clearInterval(intervalRef.current)
    intervalRef.current = null
    setTime(60)
    messageRef.current = false
}

const handleDurationChange = (e) =>{
//    durationRef.current.value = e.target.value
// console.log('ref', durationRef.current.value)

   setDuration(Number(e.target.value))
   e.target.value = ""
//    console.log('duration', duration)
}
const updateTimer = ()=>{
    // setDuration(Number(durationRef.current.value))
    setTime(duration)
    console.log('duration in update timer', duration)

}

console.log('rerender')
  return (
    <div>
      <h1>Timer: {time} seconds</h1>
     {messageRef.current &&  <p>Time is up!</p>}
      <input
    //   ref={durationRef}
       type="number"
    //    minLength={60}
       value={duration}
       onChange={handleDurationChange}
       placeholder='set duration'
      />

<button onClick={updateTimer}>Update Timer</button>

      <div
      style={{
        width: '100%',
        height: '20px',
        backgroundColor: '#e0e0e0',
        marginBottom: '10px'
      }}
      >
        <div
        ref={progressBarRef}
        style={{
            height: "100%",
            width: '100%',
            backgroundColor: '#76c7c0'
        }}
        >

        </div>
      </div>
      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default TimerComponent;
