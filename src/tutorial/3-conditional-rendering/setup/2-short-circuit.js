import React, { useState } from "react";

//! Notes - short-circuit

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState('')

  //OR Operator - either value renders, which is true.
  const firstValue = text || "hello world";

  //AND Operator - only second value renders based on first one.
  const secondValue = text && "hello world";

  return (
    <>
      <h2>FirstValue: {firstValue}</h2>
      <h2>SecondValue: {secondValue}</h2>

      {/* will not render the second value*/}
      {text && <h2>Hey! World</h2>}

      {/* will render the second value*/}
      {!text && <h2>Hey! there</h2>}
    </>
  );
};

export default ShortCircuit;
