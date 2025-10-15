import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "ESDS Website",
    description: "Developed and enhanced the official ESDS website with responsive UI and reusable components.",
    images: ["/images/esds1.png", "/images/esds2.png"]
  },
  {
    id: 2,
    title: "eNlight 360",
    description: "Worked on UI modules for eNlight 360 – Database as a Service (DBaaS) with automation and validation.",
    images: ["/images/enlight1.png", "/images/enlight2.png"]
  },
  {
    id: 3,
    title: "Patch Manager",
    description: "Implemented monitoring dashboards and automated patch manager with dynamic validation.",
    images: ["/images/patch1.png"]
  },
  {
    id: 4,
    title: "NEDFi Progressive Seller App",
    description: "Built features like multi-language support, YouTube integration, and chatbot for better user experience.",
    images: ["/images/nedfi1.png", "/images/nedfi2.png"]
  }
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <Link to={`/projects/${project.id}`} state={project} className="view-more">
              View More →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
