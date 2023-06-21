import React from "react";
import Logo from "./images/logo.svg";
import Hamburger from "./images/icon-hamburger.svg";
import CloseI from "./images/icon-close.svg";


export default function Navbar(props){

    function closeNav(){
        document.getElementById("mobileNav").style.width = "0%"
    }

    function openNav(){
        document.getElementById("mobileNav").style.width = "100%"
    }
    return(
        <div className="flex mt-10 nav--overlay ">
            
               { props.screen > 470 && <div className="flex">
                    <div className="mx-12 py-2"> 
                        <img src={Logo}/> 
                    </div> 
                    <ul className="flex text-white mx-8">
                        <li className="mx-4">home</li>
                        <li className="mx-4">shop</li>
                        <li className="mx-4">about</li>
                        <li className="mx-4">contact</li>
                    </ul>
                </div>}
                { props.screen < 470 && <div className=" flex"> 
                    <div className="mx-12"><img src={Hamburger} onClick={openNav}/> </div>
                            <div className="ml-12"> <img src={Logo} alt="" /></div>
                            </div>
                }

                <div className="overlay flex py-6 bg-white" id="mobileNav">
                    <div className="mr-auto ml-6 p-1"><img className="closebtn" src={CloseI} onClick={closeNav}/></div>
                    <ul className="flex text-black mx-8">
                        <li className="mx-4"> <a href="#">home</a></li>
                        <li className="mx-4"> <a href="#">shop</a></li>
                        <li className="mx-4"> <a href="#">about</a></li>
                        <li className="mx-4"> <a href="#">contact</a></li>
                    </ul>
                </div>
        </div>
    )
}