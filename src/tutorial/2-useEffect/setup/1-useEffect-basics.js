import React, { useState, useEffect } from "react";

//! Notes - useEffect
/* 
- by default runs after every re-render.
  - everytime state changes, page re renders and each time useEffect runs. useState evokes useEffect.
  - use when you want to change/set values (sideeffects) //! outside your component
    - used for 
      - fetching data
      - listening to events
      - signing up for subscriptions
- it takes a callback function as arguments
- //! hooks cannot be called conditionally but You can call your function conditionally inside hooks/
- use effect can be controlled to run conditionally by passing DEPENDENCY ARRAY as second argument.
  - when you pass [] empty array, then it will run only on the INITIAL RENDER.
  - you can pass some value inside dependency array to run useEffect everytime the value changes.
- you can define more than one useEffect for a component.
*/
const UseEffectBasics = () => {
  const [value, setValue] = useState(0)

  //using conditions inside useEffect - will run on each re-render
  useEffect(() => {
    console.log("call useEffect");
    if(value >= 1){
      document.title = `New message (${value})`
    }
  });

  // will run only ONCE on INITIAL RENDER as we set empty [] dependency array.
  useEffect(()=>{
    console.log('hello world')
  },[])

  //conditionally running useEffect using dependency array - will only run when value of dependency array is updated.
  useEffect(() => {
    console.log("call useEffect");
    if(value >= 1){
      document.title = `New message (${value})`
    }
  }, [value]);

  

  return (
    <>
      <h2>{value}</h2>;
      <button className="btn" onClick={()=>{setValue(value + 1)}}>Click me</button>
    </>
  );
};

export default UseEffectBasics;
