import React, { useState } from "react";

import {
	ArtGallery,
	Coffeeroasters,
	InteractiveCard,
	LeftArrow,
	RightArrow,
	bitmap,
} from "./imports";
import "./projects.css";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
const Projects = () => {
	const pictures = [bitmap, ArtGallery, Coffeeroasters, InteractiveCard];

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
