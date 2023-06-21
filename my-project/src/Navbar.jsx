import React from "react";
import Logo from "./images/logo.svg";


export default function Navbar(){
    return(
        <div className="flex">
            <div className="logo mr-auto bg-black">
                <img src={Logo}/>
            </div>
        </div>
    )
}