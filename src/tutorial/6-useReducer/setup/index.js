import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function

const Index = () => {
  const [name, setName] = useState('')
  const [people, setPeople] = useState(data)
  const [showModel, setShowModel] = useState(false)

  const handleSubmit = function(e){
    e.preventDefault()
    if(name){
      setShowModel(true)
      setPeople([...people, {name:name}])
      setName('')
    }else{
      setShowModel(false)
    }
  }

  const handleChange = function(e){
    setName(e.target.value)
  }

  return <>
    {showModel && <Modal/>}
    <form className='form' onSubmit={handleSubmit}>
      <input type='text' onChange={handleChange} value={name}/>
      <button className='btn' type='submit'>Add</button>
    </form>
    <div>
      {people.map((person)=>{
        
        return(  
          <p>{person.name}</p>
        )
      })}
    </div>
  </>;
};

export default Index;
