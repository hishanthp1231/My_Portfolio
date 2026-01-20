import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
    return (
        <div className="border-b border-slate-100/50 pb-12 overflow-hidden" id="projects">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                className="my-20 text-center text-4xl sm:text-6xl font-black text-slate-900 uppercase tracking-tighter"
            >
                Projects
            </motion.h1>

            <div className="grid grid-cols-1 gap-20 sm:gap-32">
                {PROJECTS.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-wrap lg:flex-nowrap items-center gap-12 lg:gap-20 p-8 sm:p-14 rounded-[4rem] border border-white/40 bg-white/20 backdrop-blur-3xl hover:border-indigo-500/40 hover:shadow-[0_40px_100px_rgba(79,70,229,0.1)] transition-all duration-700 group hover:-translate-y-4"
                    >
                        {/* Left Side (Image) */}
                        <div className="w-full lg:w-[45%] overflow-hidden rounded-[3rem] border-8 border-white shadow-2xl group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.15)] transition-all duration-700">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-auto object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
                            />
                        </div>

                        {/* Right Side (Details) */}
                        <div className="w-full lg:w-[55%] px-2">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="h-[2px] w-12 bg-indigo-600"></span>
                                <span className="text-xs font-black text-indigo-600 uppercase tracking-[0.3em]">Project {index + 1}</span>
                            </div>

                            <h3 className="mb-6 text-4xl sm:text-6xl font-black text-slate-900 leading-[0.9] tracking-tight group-hover:text-indigo-600 transition-colors">
                                {project.title}
                            </h3>

                            <p className="mb-10 text-xl text-slate-500 font-medium leading-relaxed max-w-xl">
                                {project.description}
                            </p>

                            <div className="mb-12 flex flex-wrap gap-3">
                                {project.technologies.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="rounded-full bg-slate-100/80 border border-slate-200/50 px-6 py-2 text-xs font-black text-slate-500 uppercase tracking-widest"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-4 px-12 py-5 rounded-full bg-slate-900 text-white font-black text-lg hover:bg-indigo-600 hover:scale-105 transition-all duration-300 shadow-2xl shadow-indigo-200/50"
                            >
                                <FaGithub className="text-2xl" />
                                <span>Explore Code_</span>
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
