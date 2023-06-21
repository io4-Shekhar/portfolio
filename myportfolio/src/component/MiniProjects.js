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
          Login Page using reactJs
          <a
            href="https://github.com/io4-Shekhar/reactgetapi/tree/main/src/pages"
            target="_blank"
          >
            <img src={gitIco} className="liveIco" alt="github icon" />
          </a>
        </Box>
      </Box>
      <Box component="div" className="single-box">
        <img src={miniproj2} className="project-img" alt="project image" />
        <Box component="div" className="project-description">
          Get Api Axios get method to call the api
          <a
            href="https://github.com/io4-Shekhar/reactgetapi/tree/main/src/component"
            target="_blank"
          >
            <img src={gitIco} className="liveIco" alt="github icon" />
          </a>
        </Box>
      </Box>
      <Box component="div" className="single-box">
        <img src={miniproj3} className="project-img" alt="project image" />
        <Box component="div" className="project-description">
          Get api call using React with materialUI
          <a
            href="https://github.com/io4-Shekhar/reactwithmatrialui/blob/main/src/component/GetApiComponent.js"
            target="_blank"
          >
            <img src={gitIco} className="liveIco" alt="github icon" />
          </a>
        </Box>
      </Box>
      <Box component="div" className="single-box">
        <img src={miniproj4} className="project-img" alt="project image" />
        <Box component="div" className="project-description">
          Make a Simple Form to Create Account
          <a
            href="https://github.com/io4-Shekhar/io4-aspiration/blob/main/assignment/2023-01-23%20header%2C%20form%2C%20footel/form.html"
            target="_blank"
          >
            <img src={gitIco} className="liveIco" alt="github icon" />
          </a>
        </Box>
      </Box>
      <Box component="div" className="single-box">
        <img src={miniproj5} className="project-img" alt="project image" />
        <Box component="div" className="project-description">
          Created a youtube page to Play a Video.
          <a
            href="https://github.com/io4-Shekhar/io4-aspiration/tree/main/assignment/2023-02-16%20youtube%20page"
            target="_blank"
          >
            <img src={gitIco} className="liveIco" alt="github icon" />
          </a>
        </Box>
      </Box>
    </Box>
  );
}
