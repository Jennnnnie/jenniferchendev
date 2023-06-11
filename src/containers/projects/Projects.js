import React, { useState } from "react";

import {
  ArtGallery,
  Coffeeroasters,
  InteractiveCard,
  LeftArrow,
  RightArrow,
  ComingSoon,
} from "./imports";
import "./projects.css";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
const Projects = () => {
  const pictures = [ArtGallery, Coffeeroasters, InteractiveCard, ComingSoon];
  const titles = [
    "Art Gallery Project",
    "Coffeeroasters Project",
    "Interactive Card Project",
    "Dnd PPG",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => {
      // Decrease the index, and if it reaches 0, loop back to the last picture
      return prevIndex === 0 ? pictures.length - 1 : prevIndex - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      // Increase the index, and if it reaches the last picture, loop back to the first picture
      return prevIndex === pictures.length - 1 ? 0 : prevIndex + 1;
    });
  };

  return (
    <div className="colCenterAlign" id="projects">
      <span className="myWorkHeading">My Work</span>
      {/* Display the current picture */}
      <img
        src={pictures[currentIndex]}
        alt="Current"
        className="project-styling"
      />
      <div className="myWork-container">
        <div className="myWork-info">
          <h1>{titles[currentIndex]}</h1>
          <button>
            <a
              href="https://github.com/Jennnnnie/art-gallery-project"
              target="_noblank"
            >
              GitHub
            </a>
          </button>
          <button>
            <a href="#" target="_noblank">
              Netlify
            </a>
          </button>
        </div>
      </div>
      {/* Add left and right arrow buttons */}
      {/* <button onClick={handlePrevious}>Previous</button>
			<button onClick={handleNext}>Next</button> */}
      <div className="flexRow alignCenter btnsDiv">
        <span className="rightBtn alignCenter" onClick={handlePrevious}>
          <AiOutlineArrowLeft color="#fff" size={24} />
        </span>
        <span className="leftBtn alignCenter" onClick={handleNext}>
          <AiOutlineArrowRight color="#fff" size={24} />
        </span>
      </div>
    </div>
  );
};

export default Projects;
