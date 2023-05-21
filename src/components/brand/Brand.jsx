import React from "react";
import { github, linkedin } from "./imports";
import "./brand.css";

const Brand = () => {
  return (
    <>
      <div className="jcdev_brand section">
        <p className="gradient-text"> Social |</p>
        <div>
          <a
            href="https://www.linkedin.com/in/jennifer-chen-004b50237/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={linkedin}
              alt="linkedin"
              className="jcdev_brand-linkedin"
            />
          </a>
        </div>
        <div>
          <a
            href="https://github.com/Jennnnnie"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="github" className="jcdev_brand-github" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Brand;
