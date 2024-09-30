import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/action';

const Counter = () => {

    const count = useSelector((state)=>state.count)
    const dispatch = useDispatch()
  return (
    <div>
      <button onClick={()=>dispatch(increment(1))}>inc</button>
      <div>{count}</div>
      <button onClick={()=>dispatch(decrement(1))}>dec</button>
    </div>
  );
}

export default Counter;
