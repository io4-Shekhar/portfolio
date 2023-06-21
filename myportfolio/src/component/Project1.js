import React, { useState } from "react";
import page1 from "../Assets/img/page1.png";
import cssIco from "../Assets/img/css.png";
import reactIco from "../Assets/img/react.png";
import gitIco from "../Assets/img/githubIco.png";
import liveIco from "../Assets/img/live.png";
import { Box } from "@mui/material";
import htmlIco from "../Assets/img/html.png";
export default function Project1() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [boot, setBoot] = useState("");
  const [react, setReact] = useState("");
  const [three, setThree] = useState("");

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
    }
  };
  const handleMouseLeave = () => {
    setHtml();
    setCss();
    setJs();
    setBoot();
    setReact();
    setThree();
  };
  return (
    <Box component="div" className="project-box">
      <Box component="div" className="left-container">
        <img src={page1} className="img-project1" />
      </Box>
      <Box component="div" className="right-container">
        <h1>Become a Seller</h1>
        <Box component="div" className="description">
          "Become a seller" This is a Page of Flipkart Which user can sell any
          Product to Indian Customer, There are two Projects in This, One has
          become a Seller and other Fee Structure, Using With HTML, CSS.
          <Box component="div" className="tech-box">
            <Box
              component="div"
              className="single-box"
              id="HTML"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={htmlIco} className="tech-ico1" alt="html icon" />
              <Box component="span">{html ? "HTML" : ""}</Box>
            </Box>
            <Box
              component="div"
              className="single-box"
              id="CSS"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={cssIco} className="tech-ico2" alt="html icon" />
              <Box component="span">{css ? "CSS/SCSS" : ""}</Box>
            </Box>
          </Box>
          <Box component="div" className="links">
            <a
              href="https://github.com/io4-Shekhar/io4-aspiration/tree/main/Monthly%20test/2023-02-28%20Test-1%20HTML-CSS%20flipkart%20seller%20page"
              target="blank"
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
    </Box>
  );
}
