import React from "react";
import Landing from "./Landing";
import TechSlider from "./TechSlider";
import "./CSS/Home.css";
const Home = () => {
  return (
    <div id="home">
      <Landing></Landing>
      <TechSlider></TechSlider>
    </div>
  );
};

export default Home;
