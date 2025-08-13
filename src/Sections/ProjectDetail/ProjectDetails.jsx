import React from "react";
import { useParams, Link } from "react-router";
import projects from "../../Data/project.json";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <p className="text-center text-red-400 mt-10">Project not found.</p>;
  }

  return (
    <div className="bg-[#1E293B] max-w-7xl mx-auto py-10 px-4">
      <img
        src={project.image}
        alt={project.name}
        className="rounded-lg mb-6 border border-gray-700"
      />
      <h1 className="text-4xl font-bold mb-4">{project.name}</h1>
      <p className="text-gray-300 mb-6">{project.shortDescription}</p>

      {/* Tech Stack */}
      <h2 className="text-2xl font-semibold text-white mb-2">Tech Stack:</h2>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.techStack.map((tech, index) => (
          <span
            key={index}
            className="badge badge-outline text-blue-300 border-gray-600"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Challenges */}
      <h2 className="text-2xl font-semibold text-white mb-2">Challenges:</h2>
      <ul className="list-disc list-inside text-gray-300 mb-6">
        {project.challenges.map((challenge, i) => (
          <li key={i}>{challenge}</li>
        ))}
      </ul>

      {/* Future Plans */}
      <h2 className="text-2xl font-semibold text-white mb-2">Future Plans:</h2>
      <ul className="list-disc list-inside text-gray-300 mb-6">
        {project.futurePlans.map((plan, i) => (
          <li key={i}>{plan}</li>
        ))}
      </ul>

      {/* Links */}
      <div className="flex gap-3 flex-wrap">
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Live Demo
        </a>
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline text-white border-gray-600 hover:bg-gray-800"
        >
          Source Code
        </a>
        <Link to="/" className="btn btn-accent">
          Back to Projects
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetails;
