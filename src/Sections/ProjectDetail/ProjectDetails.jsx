import React from "react";
import { useParams, Link } from "react-router";
import projects from "../../Data/project.json";
import { FaGlobe, FaGithub, FaArrowLeft } from "react-icons/fa";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <p className="text-center text-red-400 mt-10">Project not found.</p>;
  }

  const { frontend, backend, deployment } = project.techStack;

  return (
    <div className="bg-[#0F172A] min-h-screen py-10 px-4">
      <div className="max-w-5xl mx-auto bg-[#1E293B] rounded-xl shadow-lg border border-gray-700 p-6">
        {/* Project Image */}
        <div className="overflow-hidden rounded-lg border border-gray-700 mb-6">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Project Name */}
        <h1 className="text-4xl font-bold mb-4 text-white">{project.name}</h1>

        {/* Description */}
        <p className="text-gray-300 mb-8 leading-relaxed">
          {project.shortDescription || project.description}
        </p>

        {/* Tech Stack */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Tech Stack</h2>
          <div className="space-y-2">
            {frontend?.length > 0 && (
              <div>
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
              <div>
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
              <div>
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
        </section>

        {/* Challenges */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-3">Challenges</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            {Array.isArray(project.challenges) ? (
              project.challenges.map((c, i) => <li key={i}>{c}</li>)
            ) : (
              <li>{project.challenges}</li>
            )}
          </ul>
        </section>

        {/* Future Plans */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-3">
            Future Plans
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            {Array.isArray(project.futurePlans) ? (
              project.futurePlans.map((f, i) => <li key={i}>{f}</li>)
            ) : (
              <li>{project.futurePlans}</li>
            )}
          </ul>
        </section>

        {/* Links */}
        <div className="flex gap-3 flex-wrap">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary py-6 px-8 rounded-xl flex items-center gap-2 hover:scale-105 transition-transform"
          >
            <FaGlobe className="text-lg" />
            Live Demo
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline py-6 px-8 rounded-xl text-white border-gray-600 hover:bg-gray-800 flex items-center gap-2 hover:scale-105 transition-transform"
          >
            <FaGithub className="text-lg" />
            Source Code
          </a>
          <Link
            to="/"
            className="btn btn-secondary text-gray-600 py-6 px-8 rounded-xl flex items-center gap-2 hover:scale-105 transition-transform"
          >
            <FaArrowLeft className="text-lg" />
            Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
