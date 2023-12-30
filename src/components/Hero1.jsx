import React from "react";
import home_hero from "../assets/images/home_hero.jpeg";
import { Link } from "react-router-dom";

const Hero1 = () => {
  return (
    <div className="w-full h-[550px] lg:h-[850px] text-white">
      <div className="w-full h-full">
        <img
          className="w-full h-full object-cover object-top"
          src={home_hero}
          alt="background"
        />
        <div className="absolute w-full top-[45%] flex flex-col justify-center items-center">
            <h2 className="uppercase text-[25px] text-gray-300">Hi' I am student</h2>
            <h1 className="font-bold text-[50px] ">React Developer.</h1>
            <div className="flex flex-row">
                <Link to="/project" className="border border-white bg-yellow-400 text-black px-3 py-1 mr-2 inline-block">Projects</Link>
                <Link to="/contact" className="border border-white bg-gray-400 text-white px-3 py-1 ml-2 inline-block">Contact</Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
