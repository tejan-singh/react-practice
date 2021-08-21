import React, { useState, useReducer } from "react";
import Modal from "./Modal";

//1. default state
const defaultState = {
  people: [],
  showModel: true,
  modelContent: "hello world",
};

//2. reducer function - use to handle complex states.
const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const allItems = [...state.people, action.payload];
    return {

      people: allItems, //store all previously stored items + new items in the object 
      showModel: true,
      modelContent: "item added",
    };
  }

  if (action.type === "NO_VALUE") {
    return {
      ...state,  //store all previously stored items in the object 
      showModel: true,
      modelContent: "Please enter a value",
    };
  }

  if (action.type === "CLOSE_MODAL") {
    return {
      ...state, //store all previously stored items in the object
      showModel: false,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    // will return all people with id not equal to payload
    const newItems = state.people.filter((person) => {
     return person.id !== action.payload;
    });
    return {
      people: newItems, //store all previously stored items without removed items in the object 
      showModel: true,
      modelContent: "item removed",
    };
  }

  throw new Error("no matching action type");
};

const Index = () => {
  const [name, setName] = useState("");

  //3. set default state using useReducer
  const [state, dispatchAction] = useReducer(reducer, defaultState);

  const handleSubmit = function (e) {
    e.preventDefault();
    if (name) {
      const newItem = { name: name, id: new Date().getTime().toString() };
      //calling dispatchAction function with an object to define a action type
      dispatchAction({ type: "ADD_ITEM", payload: newItem });
      setName("");
    } else {
      dispatchAction({ type: "NO_VALUE" });
    }
  };

  const handleChange = function (e) {
    setName(e.target.value);
  };

  const closeModal = function () {
    dispatchAction({ type: "CLOSE_MODAL" });
  };

  return (
    <>
      {state.showModel && (
        <Modal modelContent={state.modelContent} closeModal={closeModal} />
      )}
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={name} />
        <button className="btn" type="submit">
          Add
        </button>
      </form>

      {state.people.map((person) => {
        return (
          <div key={person.id} className="item">
            <p>{person.name}</p>

            {/* define inline function and dispatchAction*/}
            <button
              onClick={() => {
                dispatchAction({ type: "REMOVE_ITEM", payload: person.id });
              }}
            >
              Remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
