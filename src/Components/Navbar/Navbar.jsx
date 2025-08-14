import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "#banner" },
  { name: "About Me", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    icon: <FaGithub />,
    href: "https://github.com/questcoderull",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/rejaul-karim12/",
    label: "LinkedIn",
  },
  {
    icon: <FaFacebook />,
    href: "https://facebook.com/questcoderul",
    label: "Facebook",
  },
  { icon: <FaTwitter />, href: "https://twitter.com/", label: "Twitter" },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-gradient-to-r from-[#0f172a]/90 via-[#1E293B]/80 to-[#0f172a]/90 border-b border-gray-700 shadow-lg">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 md:py-6 text-white">
        {/* Logo */}
        <a
          href="#banner"
          className="text-xl font-bold tracking-wide hover:text-primary transition-colors"
        >
          Reja..
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 font-medium">
          {navLinks.map(({ name, href }) => (
            <li key={name}>
              <a
                href={href}
                className="hover:text-primary transition-all duration-200"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Icons - Desktop */}
        <div className="hidden lg:flex gap-5 text-xl">
          {socialLinks.map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors duration-200"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-primary btn-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-3 shadow-lg bg-white text-gray-800 rounded-box w-56 border border-gray-200"
          >
            {navLinks.map(({ name, href }) => (
              <li key={name}>
                <a href={href} className="hover:text-primary transition-colors">
                  {name}
                </a>
              </li>
            ))}
            <li className="mt-2 flex gap-4 text-lg text-gray-600">
              {socialLinks.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  {icon}
                </a>
              ))}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
