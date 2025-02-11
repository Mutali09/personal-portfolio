import React from "react";
import "./About.css";
import profile_img from "../../assets/profile_img.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-paragraph">
            <p>
              I am a passionate and enthusiastic frontend developer with one
              year of experience, dedicated to crafting seamless and visually
              appealing user interfaces.
            </p>
            <p>
              With a strong determination to learn and innovate, I continuously
              strive to enhance user experiences through clean, efficient, and
              modern web solutions.
            </p>
          </div>

          {/* Skills Section */}
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML and CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Next JS</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>

          {/* Achievements Section */}
          <div className="about-achievements">
            <div className="about-achievement">
              <h1>1+</h1>
              <p>YEARS EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
              <h1>2+</h1>
              <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
              <h1>2+</h1>
              <p>SATISFIED CLIENTS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
