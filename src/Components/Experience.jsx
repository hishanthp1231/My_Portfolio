import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
    return (
        <div className="border-b border-slate-100/50 pb-20">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                className="my-20 text-center text-4xl sm:text-6xl font-black text-slate-900 uppercase tracking-tighter"
            >
                Experience
            </motion.h1>

            <div className="space-y-12">
                {EXPERIENCES.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-wrap lg:flex-nowrap gap-10 p-8 sm:p-12 rounded-[3rem] border border-white/40 bg-white/30 backdrop-blur-3xl hover:border-indigo-500/40 hover:shadow-[0_30px_60px_rgba(79,70,229,0.1)] transition-all duration-700 group hover:-translate-y-2"
                    >
                        <div className="w-full lg:w-1/4">
                            <p className="text-xl font-black tracking-tighter text-slate-400 uppercase group-hover:text-indigo-600 transition-colors">
                                {exp.year}
                            </p>
                        </div>

                        <div className="w-full lg:w-3/4">
                            <h3 className="text-3xl sm:text-4xl font-black text-slate-900 leading-none">
                                {exp.role} <br />
                                <span className="text-indigo-600 text-xl font-bold mt-2 block italic">
                                    @{exp.company}
                                </span>
                            </h3>

                            <p className="mt-8 text-xl text-slate-500 leading-relaxed font-medium">
                                {exp.description}
                            </p>

                            <div className="mt-10 flex flex-wrap gap-3">
                                {exp.technologies.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="rounded-full bg-indigo-50/80 border border-indigo-100 px-6 py-2 text-xs font-black text-indigo-700 uppercase tracking-widest"
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
