import aboutImg from "../assets/AboutAbi.jpeg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="border-b border-slate-100/50 pb-20" id="about">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="my-20 text-center text-4xl sm:text-6xl font-black text-slate-900 uppercase tracking-tighter"
            >
                About <span className="text-indigo-600">Me</span>
            </motion.h1>

            <div className="flex flex-wrap items-center">
                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full lg:w-1/2 flex items-center justify-center relative px-6 mb-16 lg:mb-0"
                >
                    <div className="relative group p-4">
                        <div className="absolute -inset-10 bg-indigo-500/10 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                        <div className="relative rounded-[4rem] overflow-hidden border-8 border-white shadow-2xl transition-all duration-700 group-hover:scale-105">
                            <img className="w-[340px] h-[420px] object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-1000" src={aboutImg} alt="about" />
                        </div>
                    </div>
                </motion.div>

                {/* Text */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 1 }}
                    className="w-full lg:w-1/2 px-10"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <span className="h-[2px] w-12 bg-indigo-600"></span>
                        <span className="text-sm font-black text-indigo-600 uppercase tracking-widest">The Narrative</span>
                    </div>
                    <p className="text-2xl leading-[1.4] text-slate-500 font-bold tracking-tight">
                        {ABOUT_TEXT}
                    </p>
                    <div className="mt-12 flex gap-8">
                        <div>
                            <p className="text-4xl font-black text-slate-900 tracking-tighter">03+</p>
                            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mt-1">Years Project Exp</p>
                        </div>
                        <div>
                            <p className="text-4xl font-black text-indigo-600 tracking-tighter">12+</p>
                            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mt-1">Tech Mastered</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
