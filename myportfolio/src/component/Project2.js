import React, { useState } from "react";
import page2 from "../Assets/img/page2.png";
import cssIco from "../Assets/img/css.png";
import reactIco from "../Assets/img/react.png";
import gitIco from "../Assets/img/githubIco.png";
import liveIco from "../Assets/img/live.png";
import firebaseIco from "../Assets/img/firebase.png";
import { Box } from "@mui/material";
import htmlIco from "../Assets/img/html.png";

export default function Project2() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [boot, setBoot] = useState("");
  const [react, setReact] = useState("");
  const [three, setThree] = useState("");
  const [firebase, setFirebase] = useState("");

  const handleMouseEnter = (e) => {
    if (e.target.id == "HTML") {
      setHtml(true);
    } else if (e.target.id == "CSS") {
      setCss(true);
    } else if (e.target.id == "JavaScript") {
      setJs(true);
    } else if (e.target.id == "Bootstrap") {
      setBoot(true);
    } else if (e.target.id == "React") {
      setReact(true);
    } else if (e.target.id == "Three.js") {
      setThree(true);
    } else if (e.target.id == "Firebase") {
      setFirebase(true);
    }
  };
  const handleMouseLeave = () => {
    setHtml();
    setCss();
    setJs();
    setBoot();
    setReact();
    setThree();
    setFirebase();
  };
  return (
    <Box component="div" className="project-box">
      <Box component="div" className="right-container">
        <h1>Nike Showroom</h1>
        <Box component="div" className="description">
          "Nike Showroom" for online Shopping
          <Box component="div" className="tech-box">
            <Box
              component="div"
              className="single-box"
              id="HTML"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={htmlIco} className="tech-ico1" alt="html icon" />
              <span>{html ? "HTML" : ""}</span>
            </Box>
            <Box
              component="div"
              className="single-box"
              id="CSS"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={cssIco} className="tech-ico2" alt="css icon" />
              <span>{css ? "CSS/SCSS" : ""}</span>
            </Box>
            {/* <Box
              component="div"
              className="single-box"
              id="Firebase"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={firebaseIco}
                className="tech-ico1"
                alt="firebase icon"
              />
              <span>{firebase ? "Firebase" : ""}</span>
            </Box> */}
          </Box>
          <Box component="div" className="links">
            <a
              href="https://github.com/io4-Shekhar/io4-aspiration/tree/main/Monthly%20test/2023-03-01%20Nike"
              target="_blank"
            >
              <img src={gitIco} className="liveIco" alt="github icon" />
              <Box component="span">GitHub</Box>
            </a>
            <a href="#" target="_blank">
              <img
                src={liveIco}
                className="liveIco"
                target="blank"
                alt="live icon"
              />
              <span>Live Demo</span>
            </a>
          </Box>
        </Box>
      </Box>
      <Box component="div" className="left-container">
        <img src={page2} className="img-project2" />
      </Box>
    </Box>
  );
}
