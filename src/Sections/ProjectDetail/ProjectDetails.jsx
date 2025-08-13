import React from "react";
import { useParams, Link } from "react-router";
import projects from "../../Data/project.json";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <p className="text-center text-red-400 mt-10">Project not found.</p>;
  }

  const { frontend, backend, deployment } = project.techStack;

  return (
    <div className="bg-[#1E293B] max-w-7xl mx-auto py-10 px-4 rounded-lg">
      {/* Project Image */}
      <img
        src={project.image}
        alt={project.name}
        className="rounded-lg mb-6 border border-gray-700 h-full w-full"
      />

      {/* Project Name */}
      <h1 className="text-4xl font-bold mb-4 text-white">{project.name}</h1>

      {/* Description */}
      <p className="text-gray-300 mb-6">
        {project.shortDescription || project.description}
      </p>

      {/* Tech Stack */}
      <h2 className="text-2xl font-semibold text-white mb-2">Tech Stack:</h2>
      <div className="mb-6">
        {frontend?.length > 0 && (
          <div className="mb-2">
            <strong className="text-white">Frontend: </strong>
            {frontend.map((tech, i) => (
              <span
                key={i}
                className="badge badge-outline text-blue-300 border-gray-600 mr-1 mb-1"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        {backend?.length > 0 && (
          <div className="mb-2">
            <strong className="text-white">Backend: </strong>
            {backend.map((tech, i) => (
              <span
                key={i}
                className="badge badge-outline text-green-300 border-gray-600 mr-1 mb-1"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        {deployment?.length > 0 && (
          <div className="mb-2">
            <strong className="text-white">Deployment: </strong>
            {deployment.map((tech, i) => (
              <span
                key={i}
                className="badge badge-outline text-purple-300 border-gray-600 mr-1 mb-1"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Challenges */}
      <h2 className="text-2xl font-semibold text-white mb-2">Challenges:</h2>
      <ul className="list-disc list-inside text-gray-300 mb-6">
        {Array.isArray(project.challenges) ? (
          project.challenges.map((c, i) => <li key={i}>{c}</li>)
        ) : (
          <li>{project.challenges}</li>
        )}
      </ul>

      {/* Future Plans */}
      <h2 className="text-2xl font-semibold text-white mb-2">Future Plans:</h2>
      <ul className="list-disc list-inside text-gray-300 mb-6">
        {Array.isArray(project.futurePlans) ? (
          project.futurePlans.map((f, i) => <li key={i}>{f}</li>)
        ) : (
          <li>{project.futurePlans}</li>
        )}
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
