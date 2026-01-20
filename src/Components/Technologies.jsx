import { SiSpringboot, SiPostgresql } from "react-icons/si";
import { FaJava, FaGithub, FaGitAlt, FaPython, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { RiReactjsLine } from "react-icons/ri";
import { motion } from "framer-motion";

const Technologies = () => {
    // Animation settings for floating effect with different delays
    const createFloatAnimation = (delay) => ({
        y: [0, -15, 0], // Moves up and down
        transition: {
            duration: 2, // 2 seconds for a full cycle
            repeat: Infinity, // Infinite loop
            ease: "easeInOut", // Smooth easing
            delay, // Individual delay for staggered animations
        },
    });

    return (
        <div className="border-b border-slate-100/50 pb-24">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                className="my-20 text-center text-4xl sm:text-6xl font-black text-slate-900 tracking-tighter uppercase">
                Technologies
            </motion.h1>

            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 px-4">
                <motion.div
                    className="rounded-[2.5rem] border border-white/40 bg-white/30 backdrop-blur-2xl p-6 sm:p-8 hover:border-indigo-500/50 hover:shadow-[0_20px_40px_rgba(79,70,229,0.1)] hover:-translate-y-2 transition-all duration-500 group"
                    animate={createFloatAnimation(0)}
                >
                    <SiSpringboot className="text-5xl sm:text-7xl group-hover:scale-110 transition-transform duration-500" style={{ color: '#6DB33F' }} />
                </motion.div>
                <motion.div
                    className="rounded-[2.5rem] border border-white/40 bg-white/30 backdrop-blur-2xl p-6 sm:p-8 hover:border-indigo-500/50 hover:shadow-[0_20px_40px_rgba(79,70,229,0.1)] hover:-translate-y-2 transition-all duration-500 group"
                    animate={createFloatAnimation(0.2)}
                >
                    <FaJava className="text-5xl sm:text-7xl text-[#007396] group-hover:scale-110 transition-transform duration-500" />
                </motion.div>
                <motion.div
                    className="rounded-[2.5rem] border border-white/40 bg-white/30 backdrop-blur-2xl p-6 sm:p-8 hover:border-indigo-500/50 hover:shadow-[0_20px_40px_rgba(79,70,229,0.1)] hover:-translate-y-2 transition-all duration-500 group"
                    animate={createFloatAnimation(0.4)}
                >
                    <DiMysql className="text-5xl sm:text-7xl text-[#4479A1] group-hover:scale-110 transition-transform duration-500" />
                </motion.div>
                <motion.div
                    className="rounded-[2.5rem] border border-white/40 bg-white/30 backdrop-blur-2xl p-6 sm:p-8 hover:border-indigo-500/50 hover:shadow-[0_20px_40px_rgba(79,70,229,0.1)] hover:-translate-y-2 transition-all duration-500 group"
                    animate={createFloatAnimation(0.6)}
                >
                    <SiPostgresql className="text-5xl sm:text-7xl group-hover:scale-110 transition-transform duration-500" style={{ color: '#336791' }} />
                </motion.div>
                <motion.div
                    className="rounded-[2.5rem] border border-white/40 bg-white/30 backdrop-blur-2xl p-6 sm:p-8 hover:border-indigo-500/50 hover:shadow-[0_20px_40px_rgba(79,70,229,0.1)] hover:-translate-y-2 transition-all duration-500 group"
                    animate={createFloatAnimation(0.8)}
                >
                    <RiReactjsLine className="text-5xl sm:text-7xl text-[#61DAFB] group-hover:scale-110 transition-transform duration-500" />
                </motion.div>
                <motion.div
                    className="rounded-[2.5rem] border border-white/40 bg-white/30 backdrop-blur-2xl p-6 sm:p-8 hover:border-indigo-500/50 hover:shadow-[0_20px_40px_rgba(79,70,229,0.1)] hover:-translate-y-2 transition-all duration-500 group"
                    animate={createFloatAnimation(1)}
                >
                    <FaGithub className="text-5xl sm:text-7xl text-slate-800 group-hover:scale-110 transition-transform duration-500" />
                </motion.div>
                <motion.div
                    className="rounded-[2.5rem] border border-white/40 bg-white/30 backdrop-blur-2xl p-6 sm:p-8 hover:border-indigo-500/50 hover:shadow-[0_20px_40px_rgba(79,70,229,0.1)] hover:-translate-y-2 transition-all duration-500 group"
                    animate={createFloatAnimation(1.2)}
                >
                    <FaGitAlt className="text-5xl sm:text-7xl text-[#F05032] group-hover:scale-110 transition-transform duration-500" />
                </motion.div>
                <motion.div
                    className="rounded-[2.5rem] border border-white/40 bg-white/30 backdrop-blur-2xl p-6 sm:p-8 hover:border-indigo-500/50 hover:shadow-[0_20px_40px_rgba(79,70,229,0.1)] hover:-translate-y-2 transition-all duration-500 group"
                    animate={createFloatAnimation(1.4)}
                >
                    <FaPython className="text-5xl sm:text-7xl text-[#3776AB] group-hover:scale-110 transition-transform duration-500" />
                </motion.div>
                <motion.div
                    className="rounded-[2.5rem] border border-white/40 bg-white/30 backdrop-blur-2xl p-6 sm:p-8 hover:border-indigo-500/50 hover:shadow-[0_20px_40px_rgba(79,70,229,0.1)] hover:-translate-y-2 transition-all duration-500 group"
                    animate={createFloatAnimation(1.6)}
                >
                    <FaHtml5 className="text-5xl sm:text-7xl text-[#E34F26] group-hover:scale-110 transition-transform duration-500" />
                </motion.div>
                <motion.div
                    className="rounded-[2.5rem] border border-white/40 bg-white/30 backdrop-blur-2xl p-6 sm:p-8 hover:border-indigo-500/50 hover:shadow-[0_20px_40px_rgba(79,70,229,0.1)] hover:-translate-y-2 transition-all duration-500 group"
                    animate={createFloatAnimation(1.8)}
                >
                    <FaCss3Alt className="text-5xl sm:text-7xl text-[#1572B6] group-hover:scale-110 transition-transform duration-500" />
                </motion.div>
            </div>
        </div>
    );
};

export default Technologies;
