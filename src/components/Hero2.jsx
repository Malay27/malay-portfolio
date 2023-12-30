import React from "react";
import project_hero from "../assets/images/project_hero.jpg"

const Hero2 = ({heading1,heading2}) => {
  return (
    <div className="w-full h-[500px] lg:h-[500px] text-white mx-0">
      <div className="w-full h-[500px]">
        <img
          className="w-full h-[500px] object-cover object-top"
          src={project_hero}
          alt="background"
        />
        <div className="absolute w-full top-[35%] flex flex-col justify-center items-center">
            <h1 className="font-bold text-[50px] text-yellow-400">{heading1}.</h1>
            <h2 className="text-[25px] ">{heading2}</h2>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
