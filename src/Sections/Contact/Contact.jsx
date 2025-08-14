import React from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

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
              required
              placeholder="Your full name"
              className="input input-bordered w-full bg-[#334155] py-6 border-gray-600 rounded-lg"
            />
            <label>Your Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              required
              className="input input-bordered w-full bg-[#334155] py-6 border-gray-600 text-white rounded-lg"
            />

            <label>Your Message</label>
            <textarea
              placeholder="Tell me about your project or just say hello..."
              rows="4"
              required
              className="textarea textarea-bordered w-full bg-[#334155] border-gray-600 rounded-xl"
            ></textarea>
            <button className="btn bg-primary hover:bg-blue-700 border-none py-6 px-8 mt-5 rounded-xl">
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
          <h2 className="text-lg font-medium mb-4">Let's connect!</h2>
          <p className="mb-6 text-gray-300">
            I’m always open to discussing new opportunities, creative ideas, or
            potential collaborations.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3 bg-[#334155] py-6 p-4 rounded-xl shadow">
              <div className="bg-[#1E2F53] p-3 rounded-full">
                <MdEmail className="text-blue-400 " size={24} />
              </div>
              <div>
                <p className="text-lg font-medium">Email</p>
                <p className="hover:text-primary cursor-pointer">
                  questcoderull@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-[#334155] py-6 p-4 rounded-xl shadow">
              <div className="bg-[#1E2F53] p-3 rounded-full">
                <MdPhone className="text-blue-400" size={24} />
              </div>
              <div>
                <p className="text-lg font-medium">Phone</p>
                <span>+8801314-961102</span>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-[#334155] py-6 p-4 rounded-xl shadow">
              <div className="bg-[#1E2F53] p-3 rounded-full">
                <MdLocationOn className="text-blue-400" size={24} />
              </div>
              <div>
                <p className="text-lg font-medium">Location</p>
                <span>Sylhet, Bangladesh</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <h3 className="text-lg font-medium mt-6 mb-3">Follow Me</h3>
          <div className="flex gap-4 ">
            <a
              target="_blank"
              href="https://github.com/questcoderull"
              className="btn btn-outline rounded-xl py-6 border-gray-500 hover:border-blue-400"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/rejaul-karim12/"
              className="btn  btn-outline rounded-xl py-6 border-gray-500 hover:border-blue-400 text-white"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/questcoderul"
              className="btn btn-outline rounded-xl py-6 border-gray-500 hover:border-blue-400 text-white"
            >
              <FaFacebook className="text-xl" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
