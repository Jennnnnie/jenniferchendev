import React, { useState } from "react";

import {
  ArtGallery,
  Coffeeroasters,
  InteractiveCard,
  LeftArrow,
  RightArrow,
} from "./imports";
import "./projects.css";

const Projects = () => {
  const [pictures, setPictures] = useState([
    '<img src={ArtGallery} alt="Art Gallery Project" />',
    '<img src={Coffeeroasters} alt="Coffee Roasters Project" />',
    '<img src={InteractiveCard} alt="Interactive Card Project" />',
  ]);

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
    <>
      <div>
        {/* Display the current picture */}
        <img src={pictures[currentIndex]} alt="Current" />

        {/* Add left and right arrow buttons */}
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </>
  );
};

export default Projects;
