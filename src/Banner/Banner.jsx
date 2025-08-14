import React from "react";

import profileImg from "../assets/myPhoto.jpg";

const Banner = () => {
  return (
    <div>
      {/* <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold text-[#4FC3F7]">
              Hi I am Rjaul Kaim
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div> */}

      <section
        id="banner"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] px-4"
      >
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="text-center md:text-left space-y-6">
            {/* Small badge */}
            <span className="inline-flex items-center gap-2  border border-blue-400 text-blue-400 px-4 py-1 rounded-full text-sm font-medium">
              <span role="img" aria-label="wave">
                👋
              </span>{" "}
              Hello, I'm
            </span>

            {/* Name */}
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              MD REJAUL <span className="text-[#4FC3F7]">KARIM</span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-xl text-gray-300">Mern stack developer</h2>

            {/* Description */}
            <p className="max-w-lg text-gray-400">
              Passionate Full Stack Developer specializing in building
              responsive and interactive web applications using modern
              technologies like React.js, Node.js, and MongoDB.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
              <a
                href="#contact"
                className="btn py-6 px-8  bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 rounded-xl"
              >
                <span role="img" aria-label="contact">
                  👤
                </span>{" "}
                Contact Me
              </a>
              <a
                href="/resume.pdf"
                download
                className="btn py-6 px-8 rounded-xl bg-gray-700 hover:bg-gray-800 text-white flex items-center gap-2"
              >
                Resume <span>⬇</span>
              </a>
            </div>
          </div>

          {/* Right Profile Image */}
          <div className="relative mt-10 md:mt-0">
            <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-[#4FC3F7]">
              <img
                src={profileImg}
                alt="Profile"
                className="w-72 md:w-80 h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
