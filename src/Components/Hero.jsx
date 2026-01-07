import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Abiram.jpeg";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <div className="mt-20 border-b border-neutral-900 pb-20">
            <div className="flex flex-wrap items-center">
                {/* Text */}
                <div className="w-full lg:w-1/2 px-6">
                    <motion.h1
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-5xl lg:text-6xl font-bold"
                    >
                        Hishanth Puvanendramoorthy
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 text-2xl bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent"
                    >
                        Software Engineer
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mt-6 text-lg text-neutral-300 max-w-xl"
                    >
                        {HERO_CONTENT}
                    </motion.p>
                </div>

                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0"
                >
                    <img
                        src={profilePic}
                        alt="Profile"
                        className="w-[300px] h-[380px] object-cover rounded-2xl shadow-lg"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
