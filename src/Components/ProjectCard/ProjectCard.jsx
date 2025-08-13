import React from "react";
import { Link } from "react-router";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-[#1E293B] p-6 rounded-xl shadow-lg border border-gray-800 transition hover:shadow-xl hover:-translate-y-1 duration-300">
      {/* Image */}
      <img
        src={project.image}
        alt={project.name}
        className="rounded-lg mb-4 border border-gray-700"
      />

      {/* Title */}
      <h3 className="text-2xl font-bold mb-2">{project.name}</h3>

      {/* Short Description */}
      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
        {project.shortDescription}
      </p>

      {/* Tech Stack Preview */}
      <div className="mb-4">
        <h4 className="text-white font-semibold mb-2">Tech Stack:</h4>
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 5).map((tech, index) => (
            <span
              key={index}
              className="badge badge-outline text-blue-300 border-gray-600"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 flex-wrap">
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary py-6 px-8 rounded-xl"
        >
          Live Demo
        </a>
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline py-6 px-8 rounded-xl text-white border-gray-600 hover:bg-gray-800"
        >
          Source Code
        </a>
        <Link
          to={`/projects/${project.id}`}
          className="btn btn-accent py-6 px-8 rounded-xl"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
