import aboutImg from "../assets/AboutAbi.jpeg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-16">
            <motion.h1
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="my-16 text-center text-4xl font-semibold"
            >
                About <span className="text-neutral-500">Me</span>
            </motion.h1>

            <div className="flex flex-wrap items-center">
                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0"
                >
                    <img
                        src={aboutImg}
                        alt="About"
                        className="w-[280px] h-[350px] object-cover rounded-2xl shadow-lg"
                    />
                </motion.div>

                {/* Text */}
                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2 px-6"
                >
                    <p className="text-lg leading-relaxed text-neutral-300">
                        {ABOUT_TEXT}
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
