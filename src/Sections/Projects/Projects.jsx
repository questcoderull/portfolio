import React from "react";
import projects from "../../Data/project.json";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="py-10 max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-white mb-2 text-center">
        My <span className="text-secondary">Projects</span>
      </h2>
      <p className="text-xl text-gray-300 text-center mb-8">
        Projects that tell a story — of challenges faced, problems solved, and
        creative ideas turned into reality.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
