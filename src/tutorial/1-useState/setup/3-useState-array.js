import React from 'react';
import { data } from '../../../data';


//! Notes - useState - remove item and all items
/*
- to remove all items, setState([])
- to remove particular item, use filter to create new array of items except the item to remove and setState to new item list
*/

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data)

  const clearList = function () {
    setPeople([]);
  };

  const removeItem = function (id) {
    let newPerson = people.filter((person) => {return(person.id !== id)})
    setPeople(newPerson);
  }

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div className="item" key={id}>
            <h4>{name}</h4>
            <button onClick={() => {removeItem(id)}}>remove</button>
          </div>
        );
      })}

      <button className="btn" onClick={clearList}>
        Clear list
      </button>
    </>
  );
};

export default UseStateArray;
