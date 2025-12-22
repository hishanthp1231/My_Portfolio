import Logo from "../assets/Logo.png";
import CV from "../assets/HishanthCV.pdf";
import { FaLinkedin, FaFacebook, FaGithub, FaInstagram, FaDownload } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4">
      <img src={Logo} alt="Logo" className="h-10" />

      <div className="flex items-center gap-6">
        <a
          href={CV}
          download="Hishanth_CV.pdf"
          className="flex items-center gap-2 px-4 py-2 bg-black rounded-lg text-white font-medium hover:bg-neutral-800 transition-all duration-300 hover:shadow-lg hover:scale-105"
        >
          <FaDownload />
          <span>Download CV</span>
        </a>

        <div className="flex gap-6 text-2xl">
          <a href="https://www.linkedin.com/in/hishanth-p-a28b48383/" target="_blank"><FaLinkedin /></a>
          <a href="https://www.facebook.com/share/1HCTUHzu1w/?mibextid=wwXIfr" target="_blank"><FaFacebook /></a>
          <a href="https://github.com/hishanthp1231" target="_blank"><FaGithub /></a>
          <a href="https://www.instagram.com/puva_hisha?igsh=czl3cHVwZ2xib3l2&utm_source=qr" target="_blank"><FaInstagram /></a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
