import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiVite } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-6xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-6xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-6xl" /> },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-400 text-6xl" />,
  },
  { name: "React.js", icon: <FaReact className="text-cyan-300 text-6xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-6xl" /> },
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-400 text-6xl" />,
  },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400 text-6xl" /> },
  { name: "GitHub", icon: <FaGithub className="text-white text-6xl" /> },
  { name: "Vite", icon: <SiVite className="text-purple-400 text-6xl" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-base-200 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl  font-bold pb-2 text-secondary text-center">
          My <span className="text-white">Skills</span>
        </h2>

        <p className="text-center text-xl max-w-4xl mx-auto text-gray-300 font-medium">
          A blend of technical expertise and creative problem-solving — these
          are the tools, technologies, and disciplines that empower me to turn
          ideas into impactful digital experiences.
        </p>
        <p className="text-gray-300 text-center mb-8">
          (Design, develop, and deliver with precision)
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 ">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group flex flex-col items-center p-4 bg-base-100 rounded-xl shadow-lg  hover:border border-primary transition-transform duration-900"
            >
              <span className="transition-transform duration-300 group-hover:scale-120">
                {skill.icon}
              </span>
              <span className="mt-2 text-base font-semibold">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
