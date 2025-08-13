import React from "react";
import projects from "../../Data/project.json";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <section className="py-10 max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        My Projects
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
