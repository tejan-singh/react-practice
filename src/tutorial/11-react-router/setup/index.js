import React from "react";
// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// pages
import Home from "./Home";
import About from "./About";
import People from "./People";
import Error from "./Error";
import Person from "./Person";
// navbar
import Navbar from "./Navbar";

// Router -> Switch -> Each Route -> respecitive Component
// Route attributes can be => exact, path="/" or "*"
const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar/>
      {/* wrapping all routes inside Switch helps to avoid showing (* or Error page at each route) */}
      <Switch>

        {/* using exact attribute sets "/" to home only */}
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/people">
          <People />
        </Route>

        {/*  (*) meanes all undefined paths. note:- ALWAYS DEFINE THIS AS LAST ROUTE. ROUTES DEFINED AFTER * WILL ALWAYS BE DISPLAYED AS ERROR */}
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;
