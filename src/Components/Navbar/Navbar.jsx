import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { TbArrowBackUp } from "react-icons/tb";

const Navbar = () => {
  return (
    <div>
      <nav className="max-w-7xl mx-auto text-white px-6 py-4 flex items-center justify-between">
        {/* Left - Logo or Name */}
        <div className="text-lg font-semibold">Rejaulkarim</div>

        {/* Right - Icons */}
        <div className="flex items-center gap-6 text-xl">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            <FaGithub />
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            <TbArrowBackUp />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            <FaTwitter />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
