import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
import PostList from "../pages/posts";
import PostDetail from "../pages/posts/detail";

const Routes = () => {
  return (
    <Switch>
      <Route path="/posts/:id">
        <PostDetail />
      </Route>
      <Route path="/posts">
        <PostList />
      </Route>
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
