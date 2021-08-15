import React, { useState } from 'react';

/* Notes - RENDERING FORM DATA - CONTROLLED INPUTS

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
- to render values on page after input:-
  - performed using handleSubmit()
*/
const ControlledInputs = () => {
  const [firstNameValue, setFirstName] = useState('')
  const [emailValue, setEmail] = useState('')
  const [people, setPeople] = useState([])

  const handleSubmit = function(e){
    e.preventDefault()
    
    const person = {
      firstName: firstNameValue,
      email: emailValue
    }

    // direclty setting people will result into storing a object
    // setPeople(person)

    //use callback to pass the object inside the array
    // this will also work but will render only only item and will update on render.
    // setPeople(()=>{
    //   return [person]
    // })

    // to render all the items in arrary, render all previous items stored in array on each render using spread operator
    setPeople((people)=>{
      // render array with previous data + new data
      return [...people,person]
    })

    //you need to set the input fields to empty after items are rendered.
    setFirstName('')
    setEmail('')

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

      <button type='submit'>Add person</button>
    </form>

    
    { people.map((eachPerson)=>{
      
      return <div className='item'>
      <h4>{eachPerson.firstName}</h4>
      <p>{eachPerson.email}</p>
    </div>
    })
    }

  </article>
}
export default ControlledInputs;
