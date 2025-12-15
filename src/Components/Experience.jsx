import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
    return (
        <div className="border-b border-neutral-900 pb-16">
            <motion.h1
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="my-16 text-center text-4xl font-semibold"
            >
                Experience
            </motion.h1>

            <div className="space-y-10">
                {EXPERIENCES.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-wrap justify-center gap-6"
                    >
                        <div className="w-full lg:w-1/4 text-neutral-400 text-lg">
                            {exp.year}
                        </div>

                        <div className="w-full lg:w-2/3">
                            <h3 className="text-xl font-semibold">
                                {exp.role} – <span className="text-purple-300">{exp.company}</span>
                            </h3>
                            <p className="mt-2 text-neutral-400">{exp.description}</p>

                            <div className="mt-3 flex flex-wrap gap-2">
                                {exp.technologies.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="rounded bg-neutral-800 px-3 py-1 text-sm text-blue-400"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
