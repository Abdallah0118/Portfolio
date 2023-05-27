import React from "react";
import "./CSS/Landing.css";
import "../assets/code.png";
import { NavLink } from "react-router-dom";

const Landing = () => {
  return (
    <section className=" container row d-flex justify-content-center align-items-center landing-section m-auto">
      <div className="col-10  col-lg-5">
        <h1>Hi, I'm Abdallah</h1>
        <div className="text-animation">
          <h3>Frontend Developer</h3>
        </div>
        <p>
          I am a highly motivated front-end developer with a passion for
          building beautiful and user-friendly web applications. I am confident
          that I can use my skills and experience to make a significant
          contribution to your team.
        </p>
        <button className=" me-3">
          <NavLink to="/Contact">Contact me</NavLink>
        </button>
        <button>
          <a
            href={require("../assets/Abdallah Mohamed CV.pdf")}
            download="Abdallah Mohamed CV.pdf"
          >
            Download CV
          </a>
        </button>
      </div>
      <div className="col-10 col-lg-5">
        <img
          className="w-100"
          id="developerImg"
          src={require("../assets/code.png")}
          alt="Img Not Found"
        />
      </div>
    </section>
  );
};

export default Landing;
