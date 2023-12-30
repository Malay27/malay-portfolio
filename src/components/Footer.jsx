import React from "react";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaMobile } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaReddit,
  FaTwitter,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <div className="bg-gray-900 mt-5 flex flex-row justify-between">
      <div className="flex flex-col justify-center items-center p-10 ml-20 ">
        <div className="w-[500px] text-gray-200 flex flex-row items-center  p-2 rounded">
          <MdEmail size={30} />
          <Link className="ml-3" to="mailto:malayjiyani111@gmail.com">
            malayjiyani111@gmail.com
          </Link>
        </div>
        <div className="w-[500px] text-gray-200 flex flex-row  items-center  p-2 rounded mt-1">
          <FaMobile size={30} />
          <p className="ml-3">+91 9510696046</p>
        </div>
        <div className="w-[500px] text-gray-200 flex flex-row items-center  p-2 rounded mt-1">
          <FaLocationDot size={30} />
          <p className="ml-3">Amreli, Gujarat</p>
        </div>
      </div>
      <div className="text-white flex flex-col justify-center items-center mr-20 p-10">
        <div >
          <p className="text-[22px]">Connect with me</p>
        </div>
        <div className="flex flex-row ">
          <Link className="m-2" to="https://www.linkedin.com/in/malayjiyani">
            <FaLinkedin />
          </Link>
          <Link className="m-2" to="https://www.github.com/Malay27">
            <FaGithub />
          </Link>
          <Link className="m-2" to="https://twitter.com/MalayJiyani">
            <FaTwitter />
          </Link>
          <Link className="m-2" to="https://www.reddit.com/user/reva_de_ne111">
            <FaReddit />
          </Link>
          <Link className="m-2" to="https://www.instagram.com/malay.jiyani/">
            <FaInstagram />
          </Link>
          <Link className="m-2" to="https://leetcode.com/20bce111/">
            <SiLeetcode />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
