import React from "react";
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";
import { Routes, Route, Navigate } from "react-router-dom";

const App =() => {
    return(
    <>
      <Routes>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/service" component={Service} />
          <Route path="/contact" component={Contact} />
          <Navigate to="/" />
         </Routes>
    </>
    );
};

export default App;