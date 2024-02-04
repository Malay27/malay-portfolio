import React from "react";
import { Route, Routes } from "react-router-dom";
import Project from "./routes/project";
import About from "./routes/about";
import Contact from "./routes/contact";
import Home from "./routes/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ChakraProvider,extendTheme } from "@chakra-ui/react";

const App = () => {
  return (
    <>
      <ChakraProvider>
        <Header />
        <Routes>
          <Route path="/malay-portfolio" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </ChakraProvider>
    </>
  );
};

export default App;
