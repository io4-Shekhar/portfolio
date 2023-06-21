import React from "react";
import bee from "../Assets/img/bee.png";
import image from "../Assets/img/coding.png";

export default function AboutMe() {
  return (
    <div className="section-about" id="aboutme">
      <div className="aboutme-container">
        <img src={image} className="graphic" alt="3D graphic" />
        <div className="description">
          <h2>About me</h2>
          <div className="text">
            I am a beginner front-end developer and I am skilled in HTML, CSS
            and JavaScript web development, as well as the React framework. I am
            looking to gain valuable experience in an IT environment and expand
            my competence. I am ready for challenges and eager to learn and
            acquire new skills.
            <br />
            <br /> I graduated from the Dr. Ram Manohar Lohiya Avadh University
            in Ayodhya, Uttar Pradesh, with a Bsc in Mathmatics.
            <br />
            <img src={bee} />
          </div>
        </div>
      </div>
    </div>
  );
}
