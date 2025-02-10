import React from "react";
import "./Hero.css";
import profile from "../../assets/profile.png";

const Hero = () => {
  return (
    <div className="hero">
      <img src={profile} alt="" />
      <h1>
        <span>I'm Nelson,</span> frontend developer based in Kenya.
      </h1>
      <p>I specialize in frontend development</p>
      <div className="hero-action">
        <div className="hero-connect">Connect With Me.</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
