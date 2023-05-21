import React from "react";
import {
  ArtGallery,
  Coffeeroasters,
  InteractiveCard,
  LeftArrow,
  RightArrow,
} from "./imports";
import "./projects.css";

const Projects = () => {
  return (
    <>
      <div className="jcdev_projects section" id="projects">
        <div className="jcdev_project-container">
          <div className="jcdev_project-title">
            <h1>My Work</h1>
          </div>
          <div className="jcdev_projects">
            <div className="jcdev_project-1">
              <img src={ArtGallery} alt="art-gallery-project" />
              <div className="jcdev-project-1-description">
                <h1>Art Gallery Website</h1>
                <p>
                  This two-page React project shows that I can branch out beyond
                  just single landing pages. There are also some cool layouts
                  that were very fun to build, yet challenging.
                </p>
              </div>
            </div>
            <div className="jcdev_project-2">
              <img src={Coffeeroasters} alt="coffeeroasters-project" />
              <div className="jcdev-project-2-description">
                <h1>Coffeeroasters Subscription Site</h1>
                <p>
                  Who doesn't love coffee?! This is a three-page React project
                  that has interactive buttons and tests my JS and logical
                  skills!
                </p>
              </div>
            </div>
            <div className="jcdev_project-3">
              <img src={InteractiveCard} alt="interactive-card-project" />
              <div className="jcdev-project-3-description">
                <h1>Interactive Card Form</h1>
                <p>
                  This is an interactive card details form that shows DOM
                  manipulation and form validation!
                </p>
              </div>
            </div>
          </div>
          <div className="jcdev_project-arrows">
            <img src={LeftArrow} alt="left-arrow" />
            <img src={RightArrow} alt="right-arrow" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
