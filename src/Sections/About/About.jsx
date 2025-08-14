import React from "react";
import {
  FaBrain,
  FaFutbol,
  FaLaptopCode,
  FaPenFancy,
  FaPlane,
} from "react-icons/fa";
import { motion } from "framer-motion";

import img1 from "../../assets/about-1.jpg";
import img2 from "../../assets/about-2.jpg";
import img3 from "../../assets/about-3.jpg";
import img4 from "../../assets/about-4.jpg";

const images = [img1, img2, img3, img4];

const About = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto py-16 px-6">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-4">
        About <span className="text-[#4FC3F7]">Me</span>
      </h2>
      <p className="text-lg text-center text-base-content max-w-3xl mx-auto mb-12 leading-relaxed">
        Hello! My name is <span className="font-semibold">Rejaul Karim</span>. I
        am a passionate beginner web developer and a dedicated English learner
        from Sylhet, Bangladesh.
      </p>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
        {/* Left Side - Image Gallery with hover vibe */}
        <div className="flex justify-center items-center">
          <div className="relative group w-full max-w-lg h-72 sm:h-80 md:h-96 lg:h-[32rem] flex items-center justify-center mb-10 lg:mb-0">
            {/* Background Shape */}
            <div
              className="absolute -inset-3 rounded-2xl -rotate-3 
                       transition-transform duration-500 ease-in-out 
                       group-hover:rotate-0  "
            >
              {/* Stack of images */}
              <div className="relative">
                {images.map((src, index) => (
                  <motion.img
                    key={index}
                    src={src}
                    alt={`Gallery ${index + 1}`}
                    className="absolute rounded-2xl object-cover shadow-lg 
           w-72 sm:w-80 md:w-96 lg:w-[28rem] 
           h-72 sm:h-80 md:h-96 lg:h-[28rem] 
           border-[3px] border-gray-200"
                    style={{
                      top: index * 25,
                      left: index * 35,
                      zIndex: images.length - index,
                    }}
                    initial={{ rotate: -3 + index * 2 }}
                    whileHover={{
                      rotate: 0,
                      x: (index - 1.5) * 90,
                      y: -20,
                      zIndex: 50,
                      scale: 1.05,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Text */}
        <div className="flex flex-col justify-between space-y-6">
          {/* Programming Journey */}
          <motion.p
            className="text-lg text-base-content leading-relaxed"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            My programming journey began a few months ago. So far, I have
            learned{" "}
            <span className="font-semibold">
              HTML, CSS, Tailwind CSS, JavaScript, React, Node.js, Express.js,
              MongoDB, Git, and GitHub
            </span>
            . I enjoy building clean, user-friendly websites and constantly
            improving my coding skills through real projects.
          </motion.p>

          {/* English & Coding Learning */}
          <motion.p
            className="text-lg text-base-content leading-relaxed"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Alongside programming, I spend 9–10 hours daily improving my coding
            skills and English. I listen to podcasts, practice speaking, write
            regularly, and take part in competitions to challenge myself and
            grow.
          </motion.p>

          {/* Hobbies */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-primary mb-2">
              Hobbies & Interests
            </h3>
            <p className="text-lg text-base-content leading-relaxed">
              Traveling ✈, Writing 🖋, Learning 🧠, Web Development 💻, and
              playing Football ⚽.
            </p>
          </motion.div>

          {/* Personality */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-primary mb-2">
              My Personality
            </h3>
            <p className="text-lg text-base-content leading-relaxed">
              I am hardworking, curious, and eager to grow. I believe in taking
              small steps toward big goals, always improving myself, and never
              giving up on learning.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
