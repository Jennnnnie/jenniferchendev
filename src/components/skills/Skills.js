import React from "react";
import { Html, Css, Javascript, ReactJS, VSCode, NodeJS } from "./imports";
import "./skills.css";

const Skills = () => {
  return (
    <>
      <div className="jcdev_skills section">
        <p className="gradient-text">Tech Stack |</p>
        <div>
          <img src={Html} alt="HTML" className="jcdev_skills-html" />
        </div>
        <div>
          <img src={Css} alt="CSS" className="jcdev_skills-css" />
        </div>
        <div>
          <img
            src={Javascript}
            alt="Javascript"
            className="jcdev_skills-javascript"
          />
        </div>
        <div>
          <img src={ReactJS} alt="ReactJS" className="jcdev_skills-react" />
        </div>
        <div>
          <img src={NodeJS} alt="VSCode" className="jcdev_skills-nodejs" />
        </div>
        <div>
          <img src={VSCode} alt="VSCode" className="jcdev_skills-vscode" />
        </div>
      </div>
    </>
  );
};

export default Skills;
