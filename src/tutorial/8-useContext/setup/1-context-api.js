import React, { useState, useContext } from "react";
import { data } from "../../../data";

//Notes - useContext
/*
- it is used when you have more than two prop drilling or child props to pass on data to the last component.
- it helps by passing value to the parent component and then all its child component can access the value.
- no need to pass value as props at each component till the required component (called as prop drilling).
- for more complex cases, you can use Redux instead of useContext.
*/


//1. define a context outside the component
const PersonContext = React.createContext();

const ContextAPI = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };


  return (
    //2. wrap around a parent component so that all its child component access the value
    <PersonContext.Provider value={{ removePerson }}>
      <h3>prop drilling</h3>
      <List people={people} />
    </PersonContext.Provider>
  );
};

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};


const SinglePerson = ({ id, name }) => {
  //3. use the value inside child component where ever necessary
  const { removePerson } = useContext(PersonContext);
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
