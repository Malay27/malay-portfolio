import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav>
        <ul className="flex items-center flex-row">
          <li className="mx-2">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-2">
            <Link to="/project">Project</Link>
          </li>
          <li className="mx-2">
            <Link to="/about">About me</Link>
          </li>
          <li className="mx-2">
            <Link to="/contact">Contact me</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
