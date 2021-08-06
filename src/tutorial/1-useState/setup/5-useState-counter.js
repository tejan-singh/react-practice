import React, { useState } from 'react';

//! Notes - useState - functionally updating state
// - functionally render state, when you want to get the previous state

const UseStateCounter = () => {

  const [value, setValue] = useState(0)

  const decreaseCount = function(){
    setValue(value - 1)
  }

  const reset = function(){
    setValue(0)
  }

  const increaseCount = function(){
    setValue(value + 1)
  }

  const complexCount = function(){
    setTimeout(function(){
      console.log('clicked')
      //! normal working
      setValue(value + 1)

      //! functionally updating state with previous value
      // setValue((prevalue) => { return prevalue + 1})
    },2000)
    
  }

  return <>
  <h2>useState counter example</h2>;
  <h2>Regular Counter</h2>
  <h2>{value}</h2>

  <button className='btn' onClick={decreaseCount}>Decrease</button>
  <button className='btn' onClick={reset}>Reset</button>
  <button className='btn' onClick={increaseCount}>Increase</button>

  <h2>Regular Counter</h2>
  <h2>{value}</h2>
  <button className='btn' onClick={complexCount}>Decrease</button>

  </>
};

export default UseStateCounter;
