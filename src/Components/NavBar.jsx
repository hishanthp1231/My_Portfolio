import Logo from "../assets/Logo.png";
import { FaLinkedin, FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4">
      <img src={Logo} alt="Logo" className="h-10" />

      <div className="flex gap-6 text-2xl">
        <a href="https://www.linkedin.com/in/hishanth-p-a28b48383/" target="_blank"><FaLinkedin /></a>
        <a href="https://www.facebook.com/share/1HCTUHzu1w/?mibextid=wwXIfr" target="_blank"><FaFacebook /></a>
        <a href="https://github.com/hishanthp1231" target="_blank"><FaGithub /></a>
        <a href="https://www.instagram.com/puva_hisha?igsh=czl3cHVwZ2xib3l2&utm_source=qr" target="_blank"><FaInstagram /></a>
      </div>
    </nav>
  );
};

export default NavBar;
