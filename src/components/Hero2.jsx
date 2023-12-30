import React from "react";
import project_hero from "../assets/images/project_hero.jpeg"

const Hero2 = () => {
  return (
    <div className="w-full h-[500px] lg:h-[500px] text-white">
      <div className="w-full h-[500px]">
        <img
          className="w-full h-[500px] object-cover object-top"
          src={project_hero}
          alt="background"
        />
        <div className="absolute w-full top-[45%] flex flex-col justify-center items-center">
            <h1 className="font-bold text-[50px] ">Projects.</h1>
            <h2 className="uppercase text-[25px] text-gray-300">Some of my recent works</h2>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
