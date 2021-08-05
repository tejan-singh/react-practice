import React, { useState } from 'react';

//!Notes - useState - object
/*
- for setting new State of an object, use sperad operator (...) with object name, {propertyToUpdate: newValue} 
*/

const UseStateObject = () => {

  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    message: 'random message'
  });

  const setMessage = function(){
    //set old state with spread operator and update the specified property only
    setPerson({...person, message:'hello world'})
  }

  return (
    <>
      <h2>useState object example</h2>;
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button onClick={setMessage} className='btm'>change message</button>
    </>
  );
  
};

export default UseStateObject;
