import React from "react";
import { Telegram, Mail } from "./imports";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <div className="jcdev_contact section" id="contact">
        <div className="jcdev_contact-container">
          <div className="jcdev_contact-content">
            <h2 className="gradient-text">CONTACT</h2>
            <h3>Please feel free to reach out!</h3>
            <div className="jcdev_contact-info">
              <img src={Telegram} alt="telegram" />
              <p>@jen_nie_c</p>
              <img src={Mail} alt="mail" />
              <p>jen.nie.333.chen@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
