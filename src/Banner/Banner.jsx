import React from "react";
import profileImg from "../assets/myPhoto.jpg";
import { FaUser } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <section
      id="banner"
      className="min-h-screen flex items-center justify-center 
                 bg-[#243042]
                 px-4 py-10"
    >
      <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* ===== Left Content ===== */}
        <div className="text-center md:text-left space-y-6">
          {/* Small Badge */}
          <span className="inline-flex items-center gap-2 border border-blue-400 bg-[#2B4675] px-4 py-2 rounded-full text-sm font-medium">
            <span role="img" aria-label="wave">
              👋
            </span>{" "}
            Hello, I'm
          </span>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            MD REJAUL <span className="text-[#4FC3F7]">KARIM</span>
          </h1>

          {/* Subtitle with Typewriter */}
          <h2 className="text-2xl text-gray-300">
            <Typewriter
              words={[
                "Frontend Developer",
                "Web Developer",
                "MERN Stack Developer",
                "Full Stack Developer",
              ]}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>

          {/* Short Description */}
          <p className="max-w-lg text-gray-400 mx-auto md:mx-0">
            Passionate Full Stack Developer specializing in building responsive
            and interactive web applications using modern technologies like
            React.js, Node.js, and MongoDB.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
            <a
              href="#contact"
              className="flex items-center gap-2 px-8 py-3 bg-primary hover:bg-blue-700 text-white rounded-xl transition-colors"
            >
              <FaUser /> Contact Me
            </a>
            <a
              href="https://drive.google.com/file/d/15J4qANDBgKYFHKcnl1inYy1neSaYBoBC/view?usp=sharing"
              target="_blank"
              className="flex items-center gap-2 px-8 py-3 bg-[#2B4675] hover:bg-gray-800 text-white rounded-xl transition-colors"
            >
              Resume <HiDownload />
            </a>
          </div>
        </div>

        {/* ===== Right Profile Image ===== */}
        <div className="relative group">
          {/* Background Shape */}
          <div
            className="absolute -inset-3 bg-[#2B4675] rounded-2xl -rotate-3 
                       transition-transform duration-500 ease-in-out 
                       group-hover:rotate-0"
          ></div>

          {/* Image */}
          <div
            className="relative rounded-2xl overflow-hidden 
                       transition-transform duration-500 ease-in-out 
                       group-hover:-rotate-3"
          >
            <img
              src={profileImg}
              alt="Profile"
              className="w-72 md:w-96 h-72 md:h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
