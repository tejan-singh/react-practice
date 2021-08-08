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
*/
const UseEffectBasics = () => {
  useEffect(() => {
    console.log("call useEffect");
    if(value >= 1){
      document.title = `New message (${value})`
    }
  });

  const [value, setValue] = useState(0)

  return (
    <>
      <h2>{value}</h2>;
      <button className="btn" onClick={()=>{setValue(value + 1)}}>Click me</button>
    </>
  );
};

export default UseEffectBasics;
