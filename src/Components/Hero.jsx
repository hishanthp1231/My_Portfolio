import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Abiram.jpeg";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <div className="mt-20 border-b border-slate-100/50 pb-24 lg:mb-32 relative">
            <div className="flex flex-wrap items-center relative z-10">
                {/* Text */}
                <div className="w-full lg:w-1/2 px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <br />
                        <br />
                        <h1 className="text-6xl sm:text-7xl lg:text-9xl font-black leading-[0.9] text-slate-900 tracking-[-0.05em]">
                            Hishanth <br />
                            <span className="text-indigo-600/90 text-8xl">Puvanendramoorthy</span>
                        </h1>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="mt-10 text-4xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent flex items-center gap-4"
                    >
                        Software Engineer
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 1 }}
                        className="mt-10 text-xl text-slate-500 max-w-xl leading-relaxed font-medium"
                    >
                        {HERO_CONTENT}
                    </motion.p>
                </div>

                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full lg:w-1/2 flex justify-center mt-20 lg:mt-0 relative"
                >
                    <div className="relative isolate group p-4">
                        {/* Dynamic glow behind image */}
                        <div className="absolute -inset-10 bg-gradient-to-tr from-indigo-500/20 via-violet-500/20 to-cyan-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

                        <div className="relative overflow-hidden rounded-[3rem] border-[8px] border-white shadow-[0_40px_80px_rgba(79,70,229,0.15)] transform transition-all duration-700 group-hover:scale-[1.02] group-hover:shadow-[0_40px_100px_rgba(79,70,229,0.25)]">
                            <img
                                src={profilePic}
                                alt="Profile"
                                className="w-[300px] h-[380px] sm:w-[360px] sm:h-[460px] object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
                            />
                        </div>

                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
