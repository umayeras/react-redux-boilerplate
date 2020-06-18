import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";

const Routes = () => {
  return (
    <Switch>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
