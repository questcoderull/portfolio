import React from "react";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Banner from "../../Banner/Banner";
import Navbar from "../../Components/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar></Navbar>

      {/* Banner */}
      <Banner></Banner>

      {/* about */}
      <About></About>

      {/* skills */}
      <Skills></Skills>

      {/* projects */}
      <Projects></Projects>

      {/* Contact */}
      <Contact></Contact>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default Home;
