import React, { useEffect, useRef } from "react";

// preserves value between re-renders
// DOES NOT trigger re-render
//use to  target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);

  const handleSubmit = function (e) {
    e.preventDefault();
    console.log(refContainer.current);
    console.log(refContainer.current.value);
    console.log(divContainer.current)
  };

  useEffect(()=>{
    // no need to set dependency array as page does not re-render with useRef.
    //sets the cursor by default set on the input field when page renders.
    refContainer.current.focus()
  })

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer} />
          <button type="submit">submit</button>
        </div>
      </form>

      <div ref={divContainer}>Hello World</div>
    </>
  );
};

export default UseRefBasics;
