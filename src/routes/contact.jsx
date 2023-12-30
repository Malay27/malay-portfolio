import React from "react";
import Hero2 from "../components/Hero2";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaMobile } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div>
      <Hero2 heading1="Contact" heading2="Let's make connection ! " />
      <div className="flex flex-col justify-center items-center pt-10">
        <div className="w-[500px] text-gray-200 flex flex-row justify-center items-center border border-gray-100 p-5 rounded">
          <MdEmail size={30}/>
          <Link className="ml-3" to="mailto:malayjiyani111@gmail.com">
            malayjiyani111@gmail.com
          </Link>
        </div>
        <div className="w-[500px] text-gray-200 flex flex-row justify-center items-center border border-gray-100 p-5 rounded mt-5">
          <FaMobile size={30}/>
          <p className="ml-3">+91 9510696046</p>
        </div>
        <div className="w-[500px] text-gray-200 flex flex-row justify-center items-center border border-gray-100 p-5 rounded mt-5">
          <FaLocationDot size={30}/>
          <p className="ml-3">Amreli, Gujarat</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
