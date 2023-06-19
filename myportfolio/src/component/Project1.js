import React, { useState } from "react";
import page1 from "../Assets/img/page1.png";
import cssIco from "../Assets/img/css.png";
import reactIco from "../Assets/img/react.png";
import gitIco from "../Assets/img/githubIco.png";
import liveIco from "../Assets/img/live.png";

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
    <div className="project-box">
      <div className="left-container">
        <img src={page1} className="img-project1" />
      </div>
      <div className="right-container">
        <h1>Become a Seller</h1>
        <div className="description">
          "Become a seller" This is a Page of Flipkart Which user can sell any
          Product to Indian Customer, There are two Projects in This, One has
          become a Seller and other Fee Structure, Using With HTML, CSS.
          <div className="tech-box">
            <div
              className="single-box"
              id="React"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={reactIco} className="tech-ico1" alt="html icon" />
              <span>{react ? "React" : ""}</span>
            </div>
            <div
              className="single-box"
              id="CSS"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={cssIco} className="tech-ico2" alt="html icon" />
              <span>{css ? "CSS/SCSS" : ""}</span>
            </div>
          </div>
          <div className="links">
            <a
              href="https://github.com/io4-Shekhar/io4-aspiration/tree/main/Monthly%20test/2023-02-28%20Test-1%20HTML-CSS%20flipkart%20seller%20page"
              target="blank"
            >
              <img src={gitIco} className="liveIco" alt="github icon" />
              <span>GitHub</span>
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
          </div>
        </div>
      </div>
    </div>
  );
}
