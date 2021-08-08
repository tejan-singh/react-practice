import React, { useState, useEffect } from 'react';

//! notes - useEffect - cleanup function
/*
- used when we are conditionally rendering components
- page renders -> useState runs -> useEffect runs
- the no. of times page renders, the same will run the eventListeners no of times which will create problems.
  - in order to avoid evoking eventlisteners again and again, you need to remove eventlistener once it is called, by using CLEANUP FUNCTION.
- page re-render -> cleanup runs -> useEffect runs.
- its good practice to set cleanup function when you set a event listener.
*/

const UseEffectCleanup = () => {

  const [size, setSize] = useState(window.innerWidth)

  const checkSize = () => {
    setSize(window.innerWidth)
  }

  useEffect(()=>{
    console.log('3. useEffect ran')

    //takes only a callback function as argument
    window.addEventListener('resize', checkSize)

    //CLEANUP FUNCTION USAGE - returns a callback
    return () => {
      console.log('2. cleanup ran')
      //removes the eventlistener and calls the callback function
      window.removeEventListener('resize', checkSize)
    }
  })
  
  console.log('1. render page')

  return <>
    <h1>Window</h1>
    <h2>{size}</h2>
  </>;
};

export default UseEffectCleanup;
