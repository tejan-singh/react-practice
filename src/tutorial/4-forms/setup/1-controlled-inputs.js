import React, { useState } from 'react';

/* Notes - HANDLING FORM DATA - CONTROLLED INPUTS

React
- while using forms,
  - labels for input MUST HAVE htmlFor='input-field-id' attribute to set labels
  - while submitting form, the form data is handled by onSubmit function defined inside <form> tag
  - when form is submitted, page is refreshed automatically and data is not rendered on page.
    In order to avoid this behaviour, pass a parameter "e" inside onSubmit function, and use e.preventDefault() method.
- to take user input through form:-
  - 1. set "onChange" attribute on each input field.
  - 2. update "setState(e.target.value)" for each field using onChange.
  - 3. set "value" attribute equal to the state value of each input field.
note:- if you do not define "onChange" attribute,state will not update and input fields will not work.
*/
const ControlledInputs = () => {
  const [firstNameValue, setFirstName] = useState('')
  const [emailValue, setEmail] = useState('')

  const handleSubmit = function(e){
    e.preventDefault()

  }

  const handleFNChange = function(e){
    setFirstName(e.target.value)
  }

  const handleEmailChange = function(e){
    setEmail(e.target.value)
  }

  return <article>
    <form className='form' onSubmit={handleSubmit}>
      <div className='form-control'>
      <label htmlFor='firstName'>Name: </label>
      <input type='text' id='firstName' name='firstName' onChange={handleFNChange} value={firstNameValue}></input>
      </div>

      <div className='form-control'>
      <label htmlFor='email'>Email: </label>
      <input type='text' id='email' name='email' onChange={handleEmailChange} value={emailValue}></input>
      </div>

      <button type='submit'>Submit</button>
    </form>
  </article>
}
export default ControlledInputs;
