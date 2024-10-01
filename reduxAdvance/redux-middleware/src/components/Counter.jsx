import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/action';
const Counter = () => {
    const count = useSelector((state)=> state.count)
    const dispatch = useDispatch()

    function handleIncrement(){
        dispatch(increment(1))
    }

    function handleDecrement(){
        dispatch(decrement(1))
    }
  return (
    <div>
      <button onClick={handleIncrement}>increment</button>
      <div>{count}</div>
      <button onClick={handleDecrement}>decrement</button>
    </div>
  );
}

export default Counter;
