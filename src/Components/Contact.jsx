import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <div className="pb-32 relative" id="contact">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                className="my-32 text-center text-4xl sm:text-6xl font-black text-slate-900 uppercase tracking-tighter"
            >
                Contact
            </motion.h2>

            <div className="text-center">
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.8 }}
                    className="inline-block p-12 sm:p-20 rounded-[4rem] border border-white/40 bg-white/20 backdrop-blur-3xl shadow-3xl group"
                >
                    <p className="text-xl sm:text-2xl font-black text-slate-400 uppercase tracking-[0.4em] mb-4">Location</p>
                    <p className="text-2xl sm:text-4xl font-black text-slate-900 mb-12 tracking-tighter">{CONTACT.address || "Sri Lanka"}</p>

                    <p className="text-xl sm:text-2xl font-black text-slate-400 uppercase tracking-[0.4em] mb-4">Contact</p>
                    <p className="text-2xl sm:text-4xl font-black text-slate-900 mb-16 tracking-tighter">{CONTACT.phoneNo}</p>

                    <a
                        href={`mailto:${CONTACT.email}`}
                        className="text-3xl sm:text-5xl lg:text-6xl font-black text-indigo-600 italic tracking-tighter border-b-[6px] border-indigo-600/20 hover:border-indigo-600 hover:text-slate-900 transition-all duration-500"
                    >
                        {CONTACT.email}
                    </a>
                </motion.div>
            </div>

            <div className="mt-40 text-center">
                <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.5em]">
                    © 2026 Hishanth Puvanendramoorthy All Rights Reserved
                </p>
            </div>
        </div>
    );
};

export default Contact;
