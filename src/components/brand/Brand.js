import React from "react";
import { github, linkedin } from "./imports";
import "./brand.css";

const Brand = () => {
  return (
    <>
      <div className="jcdev_brand section">
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
          <img src={github} alt="github" className="jcdev_brand-github" />
        </div>
      </div>
    </>
  );
};

export default Brand;
