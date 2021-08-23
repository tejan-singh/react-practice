import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';
const Person = () => {
  // id from URL params can be accessed using useParams() but its type will be STRING
  console.log(useParams())

  const {id} = useParams()
  const [name, setName] = useState('Default name')

  //find is used to search for particular item inside array of objects. It will return an object.
  // id as it is a STRING value need to be converted into interger so use parseInt(id)
  const result = data.find((EachPersonDataObj) => {return EachPersonDataObj.id === parseInt(id)})

  useEffect( ()=>{
    setName(result.name)
  },[])

  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
};

export default Person;
