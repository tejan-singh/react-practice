import React from "react";
import { Link } from "react-router-dom";

//To set links for each menu items to redirect, wrap each inside <link> component
// Link attributes => to = 'redirect path'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/people'>People</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
