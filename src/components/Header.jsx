import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Header=()=>{
    return(
        <div>
            <div className="absolute w-full flex justify-between m-3 text-white">
                <Link to="/" className="font-bold text-[30px]"><h1>Portfolio</h1></Link>
                <NavBar/>
            </div>
        </div>
    );
}

export default Header;