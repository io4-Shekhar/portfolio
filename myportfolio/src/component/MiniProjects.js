import React from "react";
import miniproj1 from "../Assets/img/miniproj1.png";
import miniproj2 from "../Assets/img/miniproj2.png";
import miniproj3 from "../Assets/img/miniproj3.png";
import miniproj4 from "../Assets/img/miniproj4.png";
import miniproj5 from "../Assets/img/miniproj5.png";
import gitIco from "../Assets/img/githubIco.png";
// import liveIco from "../Assets/img/live.png";
import { Box } from "@mui/material";

export default function MiniProjects() {
  return (
    <Box component="div" className="mini-projects-box">
      <Box component="div" className="single-box">
        <img src={miniproj1} className="project-img" alt="project image" />
        <Box component="div" className="project-description">
          React application with Bootstrap styles and Firebase authentication
          <a
            href="https://github.com/PPrzebieda/firebase-authentication"
            target="_blank"
          >
            <img src={gitIco} className="liveIco" alt="github icon" />
          </a>
        </Box>
      </Box>
      <Box component="div" className="single-box">
        <img src={miniproj2} className="project-img" alt="project image" />
        <Box component="div" className="project-description">
          Vanilla JS app that fetches and displays the current time and weather
          <a href="https://github.com/PPrzebieda/dashboard" target="_blank">
            <img src={gitIco} className="liveIco" alt="github icon" />
          </a>
        </Box>
      </Box>
      <Box component="div" className="single-box">
        <img src={miniproj3} className="project-img" alt="project image" />
        <Box component="div" className="project-description">
          React application with login, registration and dashboard component.
          <a
            href="https://github.com/PPrzebieda/react-login-app"
            target="_blank"
          >
            <img src={gitIco} className="liveIco" alt="github icon" />
          </a>
        </Box>
      </Box>
      <Box component="div" className="single-box">
        <img src={miniproj4} className="project-img" alt="project image" />
        <Box component="div" className="project-description">
          Online store outline using HTML and CSS with no JavaScript. Contain
          dropdown menu, tables, forms and other HTML elements.
          <a
            href="https://github.com/PPrzebieda/html-css-online-shop"
            target="_blank"
          >
            <img src={gitIco} className="liveIco" alt="github icon" />
          </a>
        </Box>
      </Box>
      <Box component="div" className="single-box">
        <img src={miniproj5} className="project-img" alt="project image" />
        <Box component="div" className="project-description">
          A simple counter for learning Redux
          <a
            href="https://github.com/PPrzebieda/redux-counter/tree/main/count"
            target="_blank"
          >
            <img src={gitIco} className="liveIco" alt="github icon" />
          </a>
        </Box>
      </Box>
    </Box>
  );
}
