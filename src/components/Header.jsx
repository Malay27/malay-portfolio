import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Header=()=>{
    return(
        <div>
            <div className="absolute w-full flex justify-between text-white mt-3">
                <Link to="/" className="font-bold text-[30px] ml-2"><h1>Portfolio</h1></Link>
                <NavBar/>
            </div>
        </div>
    );
}

export default Header;