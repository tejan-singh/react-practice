import React, { useState, useEffect } from 'react';

//! Notes - useEffect - data fetch
/*
- when you setState in useEffect, page render -> useEffect run -> setState -> again render ....(infinite loop).
- if you are setting state in useEffect, you need to stop re-render after first time it rendered with data, by passing dependency array as empty [].
*/



const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([])

  useEffect(()=>{
    getUsers()
  },[])

  const getUsers = async ()=>{
    const response = await fetch(url)
    const users = await response.json()
    console.log(users)
    setUsers(users)
  }

  return <>
  <h2>User data</h2>
  <ul className='users'>
    {users.map((user => {
      return (
        <li key = {user.id}>
          <img src = {user.avatar_url} alt='user-profile'/>
          <div>
            <h4>{user.login}</h4>
            <a href = {user.html_url}>profile</a>
          </div>
        </li>
      )
    }))}
  </ul>
  </>;
};

export default UseEffectFetchData;
