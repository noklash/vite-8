import React from "react";
import Twitter from "./assets/Twitter.svg";


export default function Navbar(){
    return(
        <div className="flex">
            <div className="logo mr-auto">
                <img src={Twitter}/>
            </div>
        </div>
    )
}