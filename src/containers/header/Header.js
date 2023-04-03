import React from "react";
import "./header.css";
import headshot from "../../assets/headshot.JPG";
import { Brand } from "../../components";
import { Skills } from "../../components";

const Header = () => {
  return (
    <>
      <div className="jcdev_header section">
        <div className="jcdev_header-content">
          <h1 className="gradient-text">Front-End Developer 💻</h1>
          <p>
            Hello, I am Jennifer Chen. A front-end web developer based in New
            Jersey, USA 🇺🇸
          </p>
        </div>
        <div className="jcdev_header-image">
          <img src={headshot} alt="headshot" />
        </div>
      </div>
      <Brand />
      <Skills />
    </>
  );
};

export default Header;
