import React from "react";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
import MiniProjects from "./MiniProjects";
import { Box } from "@mui/material";

export default function Projects() {
  return (
    <Box component="div" className="section-projects" id="projects">
      <Box component="div" className="projects-container">
        <Box component="div" className="project-title">
          <h2>Projects</h2>
          <Box component="span">
            Below you can see my projects, check out the code on GitHub
          </Box>
        </Box>
        <Project1 />
        <Project2 />
        <Project3 />
        <Box component="div" className="project-title mini">
          <h3>Mini projects</h3>
          <Box component="span">
            This section includes projects from the beginning of my programming
            education and technologies in which I am just beginning to learn
          </Box>
        </Box>

        <MiniProjects />
      </Box>
    </Box>
  );
}
