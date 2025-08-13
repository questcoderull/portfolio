import React, { useState } from "react";
import projectImage from "../../assets/project-1.png";

const Project1 = () => {
  const [showAllTech, setShowAllTech] = useState(false);

  const techStack = [
    "React.js",
    "Tailwind CSS",
    "DaisyUI",
    "React Router",
    "TanStack Query",
    "Axios",
    "SweetAlert2",
    "Stripe.js",
    "Firebase",
    "dotenv",
    "react-helmet-async",
    "react-hot-toast",
    "react-select",
    "react-hook-form",
    "Recharts",
    "react-slick",
    "slick-carousel",
    "react-responsive-carousel",
    "Google Font (Outfit)",
    "MongoDB",
    "Express.js",
    "JWT",
  ];

  const visibleTech = showAllTech ? techStack : techStack.slice(0, 5);

  return (
    <div className="bg-[#1E293B] p-6 rounded-xl shadow-lg border border-gray-800 transition hover:shadow-xl hover:-translate-y-1 duration-300">
      {/* Project Image */}
      <img
        src={projectImage}
        alt="Fitify Project Screenshot"
        className="rounded-lg mb-4 border border-gray-700"
      />

      {/* Title */}
      <h3 className="text-2xl font-bold mb-2">Fitify - Fitness Tracker</h3>

      {/* Description */}
      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
        A full-featured fitness tracker web app supporting{" "}
        <strong>Member</strong>, <strong>Trainer</strong>, and{" "}
        <strong>Admin</strong> dashboards. Features include role-based
        authentication, booking system, class search, Stripe payments, and
        dynamic dashboards. <br />
        <a
          href="https://fitify-5fe13.web.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Live Project →
        </a>
      </p>

      {/* Tech Stack */}
      <div className="mb-4">
        <h4 className="text-white font-semibold mb-2">Tech Stack:</h4>
        <div className="flex flex-wrap gap-2">
          {visibleTech.map((tech, index) => (
            <span
              key={index}
              className="badge badge-outline text-blue-300 border-gray-600"
            >
              {tech}
            </span>
          ))}
        </div>
        {techStack.length > 5 && (
          <button
            onClick={() => setShowAllTech(!showAllTech)}
            className="mt-3 text-xs text-blue-400 hover:underline cursor-pointer"
          >
            {showAllTech ? "Show Less" : "Show More"}
          </button>
        )}
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <a
          href="https://fitify-5fe13.web.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary py-6 px-8 rounded-xl"
        >
          Live Demo
        </a>
        <a
          href="https://github.com/questcoderull"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline py-6 px-8 rounded-xl text-white border-gray-600 hover:bg-gray-800"
        >
          Source Code
        </a>
      </div>
    </div>
  );
};

export default Project1;
