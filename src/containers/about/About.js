import React from "react";
import imgCoding from "../../assets/woman-coding.jpg";
import "./about.css";

const About = () => {
  return (
    <>
      <div className="jcdev_about section" id="about">
        <div className="jcdev_about-container">
          <div className="jcdev_about-image">
            <img src={imgCoding} alt="woman-coding" />
          </div>
          <div className="jcdev_about-content">
            <h2 className="gradient-text">About me</h2>
            <h3>A passionate Front-end Developer based in New Jersey, USA</h3>
            <p>
              As a Junior Front-end Developer, I am fluent in HTML, CSS,
              Javascript, and React. I work great in a team collaborative
              environment as well as working independently. I use VSCode as my
              main coding program and can build and maintain responsive websites
              with smooth user experience. I am continuously learning new
              programming languages and hope to build more awesome projects in
              my near future!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
