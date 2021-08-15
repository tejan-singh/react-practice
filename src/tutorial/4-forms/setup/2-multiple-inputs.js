import React, { useState } from "react";

//Notes:- FORM - CONTROLLED INPUTS - HANLDING MULTIPLE INPUT FIELDS 
/* 
- BY DYNAMIC OBJECT PROPERITES, update input fields with only one common function
- onSubmit on form tag & onClick function on the button both works.
*/

const ControlledInputs = () => {
  const [people, setPeople] = useState([]);
  const [person, setPerson] = useState({ firstName: "", email: "" });

  const handleChange = function (e) {
    const name = e.target.name;
    const value = e.target.value;

    //DYNAMICALLY UPDATING VALUE according to name attribute as property
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email) {
      //BEFORE SETTING STATE, add a unique key to each person object, in this case, we are using date

      const newPerson = {...person, id: new Date().getTime().toString()}

      // setPeople((people) => {
      //   return [...people, newPerson];
      // });

      //this also works
      setPeople([...people, newPerson]);

      setPerson({firstName: '', email:''});
    } else {
      console.log("empty values");
    }
  };
  return (
    <>
      <article>
        <form className="form">
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            add person
          </button>
        </form>
        {people.map((person) => {
          const { id, firstName, email } = person;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
