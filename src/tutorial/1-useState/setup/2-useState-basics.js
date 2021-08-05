import React, { useState } from "react";

const UseStateBasics = () => {

  const [text, setText] = useState('Random title')

  const handleClick = function(){
    if(text === 'Random title'){
      setText("hello world");
    }
    else{
      setText("Random title");
    }
    
  }

  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button onClick={handleClick} type='button' className='btn'>button</button>
    </React.Fragment>
  );
};

export default UseStateBasics;
