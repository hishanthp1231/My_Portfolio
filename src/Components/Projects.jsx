import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
    // Animation variants for sliding in
    const leftVariant = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    };

    const rightVariant = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    };

    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl"
            >
                Projects
            </motion.h1>

            <div>
                {PROJECTS.map((project, index) => (
                    <motion.div
                        key={index}
                        className="mb-8 flex flex-wrap lg:justify-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: index * 0.3 }} // Stagger each project item
                    >
                        {/* Left Side (Image) */}
                        <motion.div
                            className="w-full lg:w-1/4"
                            variants={leftVariant}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ delay: index * 0.5 }} // Stagger image animation
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="mb-6 rounded w-[150px] h-[150px] object-cover"
                            />
                        </motion.div>

                        {/* Right Side (Details) */}
                        <motion.div
                            className="w-full max-w-xl lg:w-3/4"
                            variants={rightVariant}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ delay: index * 0.7 }} // Stagger details animation
                        >
                            <h6 className="mb-2 text-2xl font-semibold">{project.title}</h6>
                            <p className="mb-4 text-neutral-400 text-lg">{project.description}</p>

                            <div className="mb-4">
                                {project.technologies.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="mr-2 rounded bg-neutral-900 px-2 text-blue-900"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {project.githubLink && (
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 mt-2 px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-purple-400 hover:text-purple-300 rounded-lg transition-all duration-300 border border-purple-900 hover:border-purple-700"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    View on GitHub
                                </a>
                            )}
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
