import React, { useState } from 'react';

/* Notes - HANDLING FORM DATA
JS
// const input = document.getElementById('myText');
// const inputValue = input.value

React
- value, onChange
- while using forms,
  - labels for input MUST HAVE htmlFor='input-field-id' attribute to set labels
  - while submitting form, the form data is handled by onSubmit function defined inside <form> tag
  - when form is submitted, page is refreshed automatically and data is not rendered on page.
    In order to avoid this behaviour, pass a parameter "e" inside onSubmit function, and use e.preventDefault() method.
  
*/
const ControlledInputs = () => {

  const handleSubmit = function(e){
    e.preventDefault()
    console.log('Hello')
  }

  return <article>
    <form className='form' onSubmit={handleSubmit}>
      <div className='form-control'>
      <label htmlFor='firstName'>Name: </label>
      <input type='text' id='firstName' name='firstName'></input>
      </div>

      <div className='form-control'>
      <label htmlFor='email'>Email: </label>
      <input type='text' id='email' name='email'></input>
      </div>

      <button type='submit'>Submit</button>
    </form>
  </article>
}
export default ControlledInputs;
