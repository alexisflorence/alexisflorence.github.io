import React from "react";
// Helmet is a React component that manages changes to the document head
import { Helmet } from "react-helmet";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import AllProjects from "../components/allProjects";

// info about me that will be placed on the homepage
import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/homepage.css";

const Homepage = () => {
  const currentSEO = SEO.find((item) => item.page === "home");

  return (
    <React.Fragment>
      <Helmet>
        <title>{INFO.main.title}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>

      <div className="page-content">
        <div className="content-wrapper">
          <div className="homepage-container">
            <div className="homepage-first-area">
              <div className="homepage-first-area-left-side">
                <div className="title homepage-title">
                  {INFO.homepage.title}
                </div>

                <div className="subtitle homepage-subtitle">
                  {INFO.homepage.description}
                </div>
              </div>
              <div className="homepage-first-area-right-side">
                <div className="homepage-image-container">
                  <div className="homepage-image-wrapper">
                    <img
                      src="homepage.png"
                      alt="about"
                      className="homepage-image"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="homepage-socials">
              <a href={INFO.socials.github} target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="homepage-social-icon"
                />
              </a>
              <a href={INFO.socials.linkedin} target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="homepage-social-icon"
                />
              </a>
              <a
                href={`mailto:${INFO.main.email}`}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faMailBulk}
                  className="homepage-social-icon"
                />
              </a>
            </div>
            <div className="homepage-projects">
              {/* <div className="homepage-recent">Current / Recent Project:</div> */}
              <AllProjects />
            </div>
            <div className="homepage-after-title">
              <div className="homepage-articles"></div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Homepage;
