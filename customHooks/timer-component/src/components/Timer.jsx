import React from 'react';
import useTimer from '../useTimer';

const Timer = () => {
const {timer, isRunning, startTimer, stopTimer, resetTimer} = useTimer(0)

  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        justifyContent: 'center',
        alignItems: 'center',
        height: '400px',
        width: '500px',
        margin: 'auto'
    }}>
      <div style={{
        fontSize: '50px',
        fontWeight: '900'
      }}>
        {timer}<span>s</span>
      </div>
      <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        gap: '20px'
      }}
      >
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Pause</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default Timer;
