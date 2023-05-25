import React from "react";
const ErrorPage = () => {
  return (
    <div className=" d-flex justify-content-center  c-img">
      <img
        className="ErrorImage vh-100"
        src={require("../assets/error.jpg")}
        alt="Page Not Found"
      />
    </div>
  );
};
export default ErrorPage;
