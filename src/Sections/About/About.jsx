import React from "react";
import {
  FaBrain,
  FaFutbol,
  FaLaptopCode,
  FaPenFancy,
  FaPlane,
} from "react-icons/fa";

import MyImage from "../../assets/ny-photo-3.jpg";

const About = () => {
  return (
    <section id="about" className="bg-base-200 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Side - Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={MyImage}
            alt="Rejaul Karim"
            className="rounded-2xl shadow-lg w-full max-w-sm border-4 border-primary hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Right Side - Text */}
        <div className="flex-1">
          {/* Title */}
          <h2 className="text-4xl font-bold mb-6 text-primary border-b-4 border-primary inline-block">
            About Me
          </h2>

          {/* Intro */}
          <p className="text-lg text-base-content mb-4 leading-relaxed">
            Hello! My name is{" "}
            <span className="font-semibold">Rejaul Karim</span>. I am a
            passionate beginner web developer and a dedicated English learner
            from Sylhet, Bangladesh. I study at a Qawmi Madrasah and balance my
            education with my love for technology and creativity.
          </p>

          {/* Programming Journey */}
          <p className="text-lg text-base-content mb-4 leading-relaxed">
            My programming journey began a few months ago. So far, I have
            learned
            <span className="font-semibold">
              {" "}
              HTML, CSS, Tailwind CSS, JavaScript, React, Node.js, Express.js,
              MongoDB, Git, and GitHub
            </span>
            . I enjoy building clean, user-friendly websites and always aim to
            improve my coding skills through real projects.
          </p>

          {/* English & Coding Learning */}
          <p className="text-lg text-base-content mb-4 leading-relaxed">
            Alongside programming, I spend 9–10 hours daily improving my coding
            skills and English. I listen to podcasts, practice speaking, write
            regularly, and participate in competitions to challenge myself and
            grow.
          </p>

          {/* Hobbies Section */}
          <h3 className="text-2xl font-semibold mt-6 mb-3 text-primary">
            Hobbies & Interests
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base-content">
            <li className="flex items-center gap-3">
              <FaPlane className="text-2xl text-secondary" /> Traveling
            </li>
            <li className="flex items-center gap-3">
              <FaPenFancy className="text-2xl text-accent" /> Writing
            </li>
            <li className="flex items-center gap-3">
              <FaBrain className="text-2xl text-warning" /> Learning New Skills
              / Things
            </li>
            <li className="flex items-center gap-3">
              <FaLaptopCode className="text-2xl text-success" /> Building
              Websites
            </li>
            <li className="flex items-center gap-3">
              <FaFutbol className="text-2xl text-error" /> Football
            </li>
          </ul>

          {/* Personality */}
          <h3 className="text-2xl font-semibold mt-6 mb-3 text-primary">
            My Personality
          </h3>
          <p className="text-lg text-base-content leading-relaxed">
            I am hardworking, curious, and eager to grow. I believe in taking
            small steps toward big goals, always improving myself, and never
            giving up on learning. I also believe that if you don't start
            something today, even just with small steps, then we will keep
            postponing it later.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
