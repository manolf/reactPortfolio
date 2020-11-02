import React from "react";
import Project from "./Project";

const Projects = ({ projects }) => {
  return (
    <>
    <section>
      <div className="title">
        <h2>My favourite Projects</h2>
        <div className="underline"></div>
      </div>
      <div>
        {projects.map((project) => {
          return <Project key={project.id} {...project}></Project>;
        })}

        
      </div>
    </section>
    </>
  );
};

export default Projects;
