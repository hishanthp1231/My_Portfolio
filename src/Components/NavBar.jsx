import Logo from "../assets/Logo.png";
import CV from "../assets/HishanthCV.pdf";
import { FaLinkedin, FaFacebook, FaGithub, FaInstagram, FaDownload } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl z-50 flex items-center justify-between px-10 py-5 rounded-[2.5rem] bg-white/30 backdrop-blur-3xl border border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500">
      <div className="flex flex-shrink-0 items-center">
        <img src={Logo} alt="Logo" className="h-12 w-auto filter drop-shadow-md hover:scale-110 transition-transform duration-500" />
      </div>

      <div className="flex items-center gap-10">
        <div className="hidden md:flex items-center gap-8 text-sm font-black uppercase tracking-widest text-slate-500">
          <a href="#about" className="hover:text-indigo-600 transition-colors">About_</a>
          <a href="#projects" className="hover:text-indigo-600 transition-colors">Works_</a>
          <a href="#contact" className="hover:text-indigo-600 transition-colors">Connect_</a>
        </div>

        <div className="h-6 w-[2px] bg-slate-200 hidden md:block"></div>

        <a
          href={CV}
          download="Hishanth_CV.pdf"
          className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg text-black font-medium hover:bg-neutral-800 transition-all duration-300 hover:shadow-lg hover:scale-105"
        >
          <FaDownload />
          <span className="hidden sm:inline">Resume</span>
        </a>

        <div className="flex items-center gap-6 text-2xl text-slate-500">
          <a href="https://www.linkedin.com/in/hishanth-p-a28b48383/" target="_blank" className="hover:text-indigo-600 transition-all hover:-translate-y-1"><FaLinkedin /></a>
          <a href="https://github.com/hishanthp1231" target="_blank" className="hover:text-slate-900 transition-all hover:-translate-y-1"><FaGithub /></a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
