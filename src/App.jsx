import React from "react";
import { Route, Routes } from "react-router-dom";
import Project from "./routes/project";
import About from "./routes/about";
import Contact from "./routes/contact";
import Home from "./routes/Home";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
