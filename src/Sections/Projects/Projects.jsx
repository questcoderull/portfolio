import React from "react";
import Project1 from "../../Components/Project1/Project1";

const Projects = () => {
  return (
    <section className="bg-base-200 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <h2 className="text-4xl font-bold text-center text-primary mb-4">
          My Projects
        </h2>

        {/* Subheadline */}
        <p className="text-center text-gray-500 max-w-2xl mx-auto mb-12">
          Here are some of my featured projects that showcase my skills in
          building responsive and interactive applications using modern
          technologies.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <Project1 />
          <Project1 />
          <Project1 />
          <Project1 />
        </div>
      </div>
    </section>
  );
};

export default Projects;
