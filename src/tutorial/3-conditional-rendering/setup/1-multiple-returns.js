import React, { useState, useEffect } from "react";

//! Notes - conditional rendering multiple returns
/*
- In JS when you define more then one return statements, then only the first one will execute.
- If you want to render multiple return statements, then you can do so conditionally.

*/

const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

  useEffect(() => {
    fetch(url)
      .then((response) => {return response.json()})
      .then((user) => {
        const { login } = user;
        setUser(login);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return <h2>{user}</h2>;
};

export default MultipleReturns;
