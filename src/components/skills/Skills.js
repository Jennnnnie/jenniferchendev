import React from "react";
import { html, css, Javascript, ReactJS, VSCode, NodeJS } from "./imports";
import {
  htmlIcon,
  cssIcon,
  javascriptIcon,
  reactIcon,
  vscodeIcon,
  nodejsIcon,
} from "./imports";
import "./skills.css";

const Skills = () => {
  return (
    <>
      <div className="jcdev_skills section">
        <div className="jcdev_skills-intro">
          <h1>Front-end Developer</h1>
          <p>
            With a passion for coding and technology, I'm your one-stop shop for
            all your front-end needs
          </p>
        </div>
        <div className="middle-container">
          <img src="/vscode.png" className="vscode" />
          <div className="colCenteral">
            <div className="rowing smallCards">
              <img src="/html.png" className="html" />
              <img src="/css.png" className="css" />
            </div>
            <img src="/reactjs.png" className="reactjs" />
          </div>
          <div className="colCenteral">
            <img src="/javascript.png" className="javascript" />
            <img src="/nodejs.png" className="nodejs" />
          </div>
        </div>
        {/* <div className="jcdev_skills-grid-container">
					<div className="jcdev_skills-vscode">
						<div className="rowing">
							<span />
							<img src={VSCode} alt="vscode" className="vscode-geometric" />
						</div>
						<div className="rowing">
							<h1>VSCode</h1>
							<img src={vscodeIcon} alt="vscode-icon" className="vscode-icon" />
						</div>
					</div>
					<div className="colCenteral">
						<div className="rowing">
							<div className="jcdev_skills-html">
								<div className="rowing">
									<span />
									<img src={html} alt="html" className="html-geometric" />
								</div>
								<div className="rowing">
									<h1>HTML</h1>
									<img src={htmlIcon} alt="html-icon" className="html-icon" />
								</div>
							</div>
							<div className="jcdev_skills-css">
								<h1>CSS</h1>
								<img src={css} alt="css" className="css-geometric" />
								<img src={cssIcon} alt="css-icon" className="css-icon" />
							</div>
						</div>
						<div className="jcdev_skills-javascript">
							<h1>Javascript</h1>
							<img
								src={Javascript}
								alt="javascript"
								className="javascript-geometric"
							/>
							<img
								src={javascriptIcon}
								alt="javscript-icon"
								className="javascript-icon"
							/>
						</div>
					</div>
					<div className="jcdev_skills-react">
						<h1>React</h1>
						<img src={ReactJS} alt="react" className="react-geometric" />
						<img src={reactIcon} alt="react-icon" className="react-icon" />
					</div>
					<div className="jcdev_skills-nodejs">
						<h1> NodeJS</h1>
						<img src={NodeJS} alt="nodejs" className="nodejs-geometric" />
						<img src={nodejsIcon} alt="nodejs-icon" className="nodejs-icon" />
					</div>
				</div> */}
        <div className="jcdev_skills-grid-container"></div>
      </div>
    </>
  );
};

export default Skills;
