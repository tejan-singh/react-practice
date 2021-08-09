import React, { useState, useEffect } from 'react';

const ShowHide = () => {

  const [show, setShow] = useState(true)

  const handleClick = function(){
    setShow(!show)
  }

  const Item = function(){
    const [size, setSize] = useState(window.innerWidth)

    const checkSize = function(){
      setSize(window.innerWidth)
    }

    useEffect(()=>{
      window.addEventListener('resize', checkSize)
      return ()=>{
        window.removeEventListener('resize', checkSize)
      }
    },[])

    return <>
      <h2>Window</h2>
      <h3>Size: {size}</h3>
    </>
  }

  return <>
  <button className='btn' onClick = {handleClick}>show/hide</button>
  {show && <Item />}
  </>;
};

export default ShowHide;
