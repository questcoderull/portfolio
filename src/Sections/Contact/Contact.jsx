import React from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className=" py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        {/* Left Side - Form */}
        <motion.div
          className="bg-[#1e293b] p-6 rounded-xl shadow-lg py-12"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-4">Send me a message</h2>
          <form className="flex flex-col gap-4">
            <label>Your Name</label>
            <input
              type="text"
              placeholder="Your full name"
              className="input input-bordered w-full bg-[#334155] py-6 border-gray-600 "
            />
            <label>Your Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="input input-bordered w-full bg-[#334155] py-6 border-gray-600 text-white"
            />

            <label>Your Message</label>
            <textarea
              placeholder="Tell me about your project or just say hello..."
              rows="4"
              className="textarea textarea-bordered w-full bg-[#334155] border-gray-600"
            ></textarea>
            <button className="btn bg-primary hover:bg-blue-700 border-none py-6 px-8 mt-5">
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Right Side - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-semibold mb-4">Let's connect!</h2>
          <p className="mb-6 text-gray-300">
            I’m always open to discussing new opportunities, creative ideas, or
            potential collaborations.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3 bg-[#334155] py-6 p-4 rounded-lg shadow">
              <MdEmail className="text-blue-400" size={24} />
              <span>imzahidhasan.mail@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 bg-[#334155] py-6 p-4 rounded-lg shadow">
              <MdPhone className="text-blue-400" size={24} />
              <span>+880 1794-242676</span>
            </div>
            <div className="flex items-center gap-3 bg-[#1E293B] py-6 p-4 rounded-lg shadow">
              <MdLocationOn className="text-blue-400" size={24} />
              <span>Rajshahi, Bangladesh</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-6">
            <a
              href="#"
              className="btn btn-circle btn-outline border-gray-500 hover:border-blue-400"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="#"
              className="btn btn-circle btn-outline border-gray-500 hover:border-blue-400 text-white"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="#"
              className="btn btn-circle btn-outline border-gray-500 hover:border-blue-400 text-white"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
