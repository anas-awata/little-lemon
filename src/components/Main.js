import React, { useReducer } from "react";
import Hero_section from "./Hero_section";
import Highlights from "./Highlights";
import Testimonials from "./Testimonials";
import About from "./About";

export const Main = () => {
  return (
    <main style={{ display: "flex", flexDirection: "column" }}>
      <Hero_section></Hero_section>
      <Highlights></Highlights>
      <About></About>
    </main>
  );
};

export default Main;
