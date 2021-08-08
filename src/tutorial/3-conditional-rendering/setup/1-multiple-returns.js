import React, { useState, useEffect } from 'react';

//! Notes - conditional rendering multiple returns
/*
- In JS when you define more then one return statements, then only the first one will execute.
- If you want to render multiple return statements, then you can do so conditionally.

*/

const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {

  const[loading, setLoading] = useState(true)

  if (loading){
    return <h2>Loading...</h2>;
  }

  return <h2>multiple returns</h2>;
};

export default MultipleReturns;
