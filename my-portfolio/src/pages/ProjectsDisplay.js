import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";
import Link from '@mui/material/Link';

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt='amina' />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <Link {...project.link}><GitHubIcon /></Link>
    </div>
  );
}

export default ProjectDisplay;