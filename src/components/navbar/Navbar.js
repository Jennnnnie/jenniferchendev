import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#about">About</a>
    </p>
    <p>
      <a href="#projects">Projects</a>
    </p>
    <p>
      {" "}
      <a href="#contact">Contact</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <div className="jcdev_navbar">
        <div className="jcdev_navbar-links">
          <div className="jcdev_navbar-links_logo">Jennie.dev</div>
          <div className="jcdev_navbar-links_container">
            <p>
              <a href="#home">Home</a>
            </p>
            <p>
              <a href="#about">About</a>
            </p>
            <p>
              <a href="#projects">Projects</a>
            </p>
            <p>
              <a href="#contact">Contact</a>
            </p>
          </div>
          <div className="jcdev_navbar-menu">
            {toggleMenu ? (
              <RiCloseLine
                color="#fff"
                size={27}
                onClick={() => setToggleMenu(false)}
              />
            ) : (
              <RiMenu3Line
                color="#fff"
                size={27}
                onClick={() => setToggleMenu(true)}
              />
            )}
            {toggleMenu && (
              <div className="jcdev_navbar-menu_container scale-up-center">
                <div className="jcdev_navbar-menu_container-links">
                  <Menu />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
