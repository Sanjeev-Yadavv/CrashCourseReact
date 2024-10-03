import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const useTimer = (initialValue) => {
    const [timer, setTimer] = useState(initialValue)
    const [isRunning, setIsRunning] = useState(false)
    const [intervalId, setIntervalId] = useState()

    useEffect(() => {
        return ()=>{
            if(intervalId){
                clearInterval(intervalId)
            }
        }

    },[intervalId])
    function startTimer() {
       if(!isRunning){
        setIsRunning(true)
        let newIntervalId =  setInterval(() => {
            setTimer((prev) => prev + 1)
        }, 1000)
        setIntervalId(newIntervalId)
       }
    }

    function stopTimer(){
        if(isRunning){
            setIsRunning(false)
            clearInterval(intervalId)
        }
    }

    function resetTimer(){
       clearInterval(intervalId)
       setIsRunning(false)
       setTimer(0)
    }

    return (
        {
            timer, isRunning, startTimer, stopTimer, resetTimer
        }
    );
}

export default useTimer;
