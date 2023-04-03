import React from "react";
import { Html, Css, Javascript, ReactJS, VSCode } from "./imports";
import "./skills.css";

const Skills = () => {
  return (
    <>
      <div className="jcdev_skills section">
        <div>
          <img src={Html} alt="HTML" />
        </div>
        <div>
          <img src={Css} alt="CSS" />
        </div>
        <div>
          <img src={Javascript} alt="Javascript" />
        </div>
        <div>
          <img src={ReactJS} alt="ReactJS" />
        </div>
        <div>
          <img src={VSCode} alt="VSCode" />
        </div>
      </div>
    </>
  );
};

export default Skills;
