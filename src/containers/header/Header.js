import React from "react";
import "./header.css";
import headshot from "../../assets/headshot.png";

const Header = () => {
  return (
    <>
      <div className="jcdev_header section" id="about">
        <div className="jcdev_header-image">
          <img src={headshot} alt="headshot" />
        </div>
        <div className="jcdev_header-content">
          <h1>Hi I'm Jennie, and I'd love to work on your next project 💻</h1>
          <p>
            I love working with others and creating awesome websites! I use
            VSCode as my main coding program and can build and maintain
            responsive websites with smooth user experience. I am continuously
            learning new programming languages and hope to build more awesome
            projects in my near future!
          </p>
          <button className="jcdev_header-button">Contact me</button>
        </div>
      </div>
    </>
  );
};

export default Header;
