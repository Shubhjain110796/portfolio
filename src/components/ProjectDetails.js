import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./ProjectDetails.css";

function ProjectDetails() {
  const location = useLocation();
  const project = location.state;

  if (!project) {
    return (
      <div className="project-details">
        <h2>Project not found</h2>
        <Link to="/projects" className="back-btn">⬅ Back</Link>
      </div>
    );
  }

  return (
    <div className="project-details">
      <h2>{project.title}</h2>
      <p>{project.description}</p>

      <div className="project-images">
        {project.images?.map((img, i) => (
          <img key={i} src={img} alt={`${project.title}-${i}`} />
        ))}
      </div>

      <Link to="/projects" className="back-btn">⬅ Back to Projects</Link>
    </div>
  );
}

export default ProjectDetails;
