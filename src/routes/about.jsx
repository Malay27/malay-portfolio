import React from "react";
import Hero2 from "../components/Hero2";
import { Link } from "react-router-dom";
import profile_pic from "../assets/images/profile-pic.png";

const About = () => {
  return (
    <div>
      <Hero2 heading1="Abouts" heading2="I am friendly Front-End Developer"/>
      <div className="text-white flex flex-row items-center mt-10">
        <div className="w-3/4 flex flex-col justify-center m-auto">
          <div className="text-center">
            <h2 className="text-[35px] font-bold">Who am I?</h2>
            <p className="text-[23px]">
              Malay is a Passionate Computer Science Student with a huge love
              for Java, JavaScript, DSA.
            </p>
            <p className="text-[23px]">
              Malay love to travel 🏕️ and watch a movies 🎥.
            </p>
            <p className="text-[23px]">Malay love to watch Anime ⛩️</p>
            <Link
              to="/contact"
              className="border border-white bg-yellow-400 text-black px-5 py-1 ml-2 mt-3 inline-block"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="w-1/4">
          <img className="w-[70%] h-[70%]" src={profile_pic} />
        </div>
      </div>
    </div>
  );
};

export default About;
