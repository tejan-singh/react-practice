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
      .then((response) => {
        if(response.status >= 200 && response.status <= 299){
          return response.json()
        }else{
          setIsLoading(false);
          setIsError(true);
          // send user the exact error message manually in the console in case if url is wrong
          throw new Error(response.statusText)
        }
      })
      .then((user) => {
        const { login } = user;
        setUser(login);
        setIsLoading(false);
      })
      .catch((err) => {
        // will only show network errors
        console.log(err);
      });
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>Error</h2>;
  }

  return <h2>{user}</h2>;
};

export default MultipleReturns;
