import React from "react";
import { Link } from "react-router-dom";

const ProjectItem = ({ project }) => {
  const { title, duration, discription, tech_stack, projectLinks } = project;
  return (
    <div className="text-white m-4 border-2 rounded-[15px] p-2 flex flex-col bg-gray-600">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-bold text-3xl text-yellow-200">{title}</h2>
        <p className="text-lg text-gray-300">{duration}</p>
      </div>
      <div>
        <ul>
          {discription.map((dis, index) => (
            <li className="text-lg" key={dis + index}>
              {"• " + dis}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between items-center mb-2 mt-2">
        <div className="flex">
          {Object.keys(projectLinks).map((key) => (
            <Link className="border rounded-[5px] border-white bg-yellow-400 text-black px-3 py-1 mr-2 inline-block" key={key + projectLinks[key]} to={projectLinks[key]}>
              {key}
            </Link>
          ))}
        </div>
        {/* <Link className="border border-white bg-yellow-400 text-black p-2 mr-2" to={github_repo}>Github</Link> */}
        <p className="text-lg font-bold text-gray-300">{tech_stack.join(", ")}</p>
      </div>
    </div>
  );
};

export default ProjectItem;
