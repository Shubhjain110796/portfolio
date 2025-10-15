import React from "react";
import "./Navbar.css";
import ThemeToggle from "./ThemeToggle";

const Navbar = ({ theme, setTheme }) => {
  return (
    <nav className="navbar">
      <h1 className="logo">Shubham Jain</h1>
      <ul className="nav-links">
        
        <li><a href="/">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
         <li>
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
