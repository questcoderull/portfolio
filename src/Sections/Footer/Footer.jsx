import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1E293B] border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left Side */}
        <div className="flex items-center gap-3 text-gray-300 text-sm">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="text-blue-400"
          >
            <path d="M22.672 15.226l-2.432.811..."></path>
          </svg>
          <p>
            © {new Date().getFullYear()} — All rights reserved by{" "}
            <span className="font-semibold text-white">Rejaul Karim</span>
          </p>
        </div>

        {/* Right Side */}
        <div className="flex gap-5 text-gray-400">
          <a
            href="https://github.com/questcoderull"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/rejaul-karim12/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="https://www.facebook.com/questcoderul"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <FaFacebook size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
