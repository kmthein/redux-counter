import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
  const counter = useSelector(state => state.counter);

  const isShow = useSelector(state => state.isShow);

  const dispatch = useDispatch();

  const increaseHandler = () => {
    dispatch({type: "increment"})
  }

  const decreaseHandler = () => {
    dispatch({type: "decrement"})
  }

  const increasedBy5 = () => {
    dispatch({type: "increased by 5", amount: 5})
  }

  const toggleHandler = () => {
    dispatch({type: "toggle show"})
  }

  return (
    <div className='counter-div'>
        <h1>Redux Counter</h1>
        {
            isShow && <p className='counter'>{counter}</p>
        }      
        <div className='btn-div'>
            <button onClick={decreaseHandler}>Decrease</button>
            <button onClick={increasedBy5}>Increase By 5</button>
            <button onClick={increaseHandler}>Increase</button>
        </div>
        <div className='btn-div last'>
            <button onClick={toggleHandler}>Toggle</button>
        </div>
    </div>
  )
}

export default Counter