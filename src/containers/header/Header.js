import React, { useState } from "react";
import headshot from "../../assets/headshot.png";
import "./header.css";

const Header = () => {
  const [isOPen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

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
          <button onClick={handleOpen} className="jcdev_header-button">
            Contact me
          </button>
          {isOPen && (
            <div className="header-popup">
              <div className="header-popup-content">
                <span onClick={handleClose} className="header-close-button">
                  &times;
                </span>
                <p>Phone Number: 973-978-1796</p>
                <p>Email: jen.nie.333.chen@gmail.com</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
