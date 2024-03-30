import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Topcreator from "./components/Topcreator";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import Pricings from "./components/Pricings";
import Social from "./components/Social";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Topcreator></Topcreator>
      <HowItWorks></HowItWorks>
      <Features></Features>
      <Pricings></Pricings>
      <Social></Social>
      <Footer></Footer>
    </>
  );
};

export default App;
