import React from "react";
import { Routes as ReactRoutes, Route } from "react-router-dom";

import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
import PostList from "../pages/posts";
import PostDetail from "../pages/posts/detail";

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/posts/:id" element={<PostDetail />} />
      <Route path="/posts" element={<PostList />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/" element={<Home />} />
    </ReactRoutes>
  );
};

export default Routes;
