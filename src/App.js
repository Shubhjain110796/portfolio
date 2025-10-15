import logo from './logo.svg';
import './App.css';
import { HashRouter  as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import React, { useState, useEffect } from 'react';
import ProjectDetails from './components/ProjectDetails';
function App() {
   const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
     <Router>
  <Navbar theme={theme} setTheme={setTheme} />
  <Routes>
    <Route path="/" element={<Hero />} />
    <Route path="/about" element={<About />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/projects/:id" element={<ProjectDetails />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</Router>
    </>
  );
}

export default App;
