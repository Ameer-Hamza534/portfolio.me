import React from "react";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact/>
    </>
  );
};

export default App;
