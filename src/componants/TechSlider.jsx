import React from "react";
import "./CSS/TechSlider.css";

const TechSlider = () => {
  return (
    <section id="techslider">
      <div
        className="container row d-flex justify-content-center align-items-center m-auto"
        id="resposive"
      >
        <div className="col-12  col-md-6 d-flex justify-content-center align-items-center">
          <img
            className=""
            id="uiImg"
            src={require("../assets/prototype.png")}
            alt="Img Not Found"
          />
        </div>
        <div className="col-12  col-md-6 text-center text-md-start">
          <h3>BUILDING RESPONSIVE UI</h3>
          <h4>WITH REACT JS AND BOOTSTRAP</h4>
          <p>
            Responsive Design has been the prime requirement as we build the app
            considering the “mobile first” approach. So it is more important
            than ever to make the app responsive for all devices.
          </p>
        </div>
      </div>
      <div id="slider">
        <div id="slider-track">
          <div className="slide">
            <img
              src={require("../assets/Web icons/bootstrap.png")}
              alt="Img Not Found"
            />
          </div>
          <div className="slide">
            <img
              src={require("../assets/Web icons/css-3.png")}
              alt="Img Not Found"
            />
          </div>
          <div className="slide">
            <img
              src={require("../assets/Web icons/django.png")}
              alt="Img Not Found"
            />
          </div>
          <div className="slide">
            <img
              src={require("../assets/Web icons/git.png")}
              alt="Img Not Found"
            />
          </div>
          <div className="slide">
            <img
              src={require("../assets/Web icons/github.png")}
              alt="Img Not Found"
            />
          </div>
          <div className="slide">
            <img
              src={require("../assets/Web icons/html-5.png")}
              alt="Img Not Found"
            />
          </div>
          <div className="slide">
            <img
              src={require("../assets/Web icons/jquery.png")}
              alt="Img Not Found"
            />
          </div>
          <div className="slide">
            <img
              src={require("../assets/Web icons/js.png")}
              alt="Img Not Found"
            />
          </div>
          <div className="slide">
            <img
              src={require("../assets/Web icons/mysql.png")}
              alt="Img Not Found"
            />
          </div>
          <div className="slide">
            <img
              src={require("../assets/Web icons/node-js.png")}
              alt="Img Not Found"
            />
          </div>
          <div className="slide">
            <img
              src={require("../assets/Web icons/postgresql.png")}
              alt="Img Not Found"
            />
          </div>
          <div className="slide">
            <img
              src={require("../assets/Web icons/python.png")}
              alt="Img Not Found"
            />
          </div>
          <div className="slide">
            <img
              src={require("../assets/Web icons/react.png")}
              alt="Img Not Found"
            />
          </div>
          <div className="slide">
            <img
              src={require("../assets/Web icons/redux.png")}
              alt="Img Not Found"
            />
          </div>
          <div className="slide">
            <img
              src={require("../assets/Web icons/sass.png")}
              alt="Img Not Found"
            />
          </div>
          <div className="slide">
            <img
              src={require("../assets/Web icons/typescript.png")}
              alt="Img Not Found"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSlider;
