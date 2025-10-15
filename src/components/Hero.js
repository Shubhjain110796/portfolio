import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <h1 className="hero-title">
        Hi, I'm Shubham <span className="wave">👋</span>
      </h1>
      <p className="hero-subtitle">React.js Developer | UI Enthusiast</p>
      <a href="#projects" className="btn hero-btn">View My Work</a>
    </section>
  );
}

export default Hero;
