import logo from "../../../public/assets/images/acm-logo-white.png";
import Image from "next/image";
import { FaFacebook, FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-primary to-black text-white py-10 px-6 flex flex-col items-center">
      <div className="container mx-auto flex flex-col justify-center items-center md:items-start md:flex-row w-full p-6 md:p-10">
        <div className="flex flex-col items-center md:items-start w-full md:w-1/3 mb-6 md:mb-0">
          <Image src={logo} alt="ACM Logo" width={300} height={300} />
        </div>
        <div className="flex flex-col justify-center items-right md:items-end md:ml-10 text-center md:text-left w-full md:w-2/3 h-[160px]">
          <h1 className="text-1xl md:text-1xl font-bold mb-2">Association for Computing Machinery Student Chapter</h1>
          <h2 className="text-1xl md:text-1xl font-semibold text-secondary mb-4">University of Colombo School of Computing</h2>
          <div className="flex space-x-6 justify-center md:justify-start">
            <a
              href="https://www.facebook.com/share/14jTrd2BJoH/?mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://youtube.com/@ucscacmsc?si=YmFrzzt0_G8icuZ7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaYoutube size={20} />
            </a>
            <a
              href="https://www.linkedin.com/company/ucscacmstudentchapter"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com/ucsc.acm?igsh=MXJveG9pMGI2anpodw=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
      <hr className="border-t border-gray-600 w-3/4 my-6" />
      <div className="text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} ACM UCSC. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
