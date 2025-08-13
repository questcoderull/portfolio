import React from "react";
import { Link } from "react-router";

const ProjectCard = ({ project }) => {
  // Tech stack object merge into a single array
  const techs = Object.values(project.techStack).flat();

  return (
    <div className="bg-[#1E293B] p-5 rounded-lg shadow-md border border-gray-700 hover:shadow-lg transition duration-300">
      {/* Project Image */}
      <img
        src={project.image}
        alt={project.name}
        className="rounded-lg mb-3 border border-gray-600"
      />

      {/* Project Name */}
      <h3 className="text-2xl mt-5 font-bold mb-2">{project.name}</h3>

      {/* Short Description */}
      <p className="text-gray-300 text-md mb-5">
        {project.shortDescription || project.description}
      </p>

      {/* Show only few techs */}
      <div className="flex flex-wrap gap-2 mb-3">
        {techs.slice(0, 4).map((tech, index) => (
          <span
            key={index}
            className="badge badge-outline text-blue-300 border-gray-600 text-xs"
          >
            {tech}
          </span>
        ))}
        {techs.length > 4 && (
          <span className="text-xs text-gray-400">
            +{techs.length - 4} more
          </span>
        )}
      </div>

      {/* Buttons */}
      <div className="mt-8 flex gap-2 flex-wrap">
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn  btn-primary py-6 px-8 rounded-xl"
        >
          Live Demo
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
