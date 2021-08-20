import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";

//1. default state
const defaultState = {
  // people: [],
  people:data,
  showModel: true,
  modelContent: "hello world",
};

//2. reducer function - use to handle complex states.
const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const allItems = [...state.people, action.payload];
    return {
      ...state,
      people: allItems,
      showModel: true,
      modelContent: "item added",
    };
  }

  if (action.type === "NO_VALUE") {
    return {
      ...state,
      showModel: true,
      modelContent: "Please enter a value",
    };
  }

  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      showModel: false
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
      const newItem = { name: name };
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

  const closeModal = function(){
    dispatchAction({ type: "CLOSE_MODAL" });
  }

  return (
    <>
      {state.showModel && <Modal modelContent={state.modelContent} closeModal={closeModal}/>}
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={name} />
        <button className="btn" type="submit">
          Add
        </button>
      </form>
      <div>
        {state.people.map((person) => {
          return <p>{person.name}</p>;
        })}
      </div>
    </>
  );
};

export default Index;
