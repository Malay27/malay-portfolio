import React, { useState } from "react";
import Hero2 from "../components/Hero2";
import { projectsList } from "../constant";
import ProjectItem from "../components/ProjectItem";

const Project = () => {
  const [projectAll, setProjectAll] = useState(projectsList);
  return (
    <div>
      <Hero2 />
      <div className="flex flex-col mt-3">
        {projectAll.map((project) => (
          <ProjectItem key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
