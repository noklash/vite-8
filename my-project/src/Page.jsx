import React from "react";
import AboutDark from "./images/image-about-dark.jpg";
import AboutLight from "./images/image-about-light.jpg";


export default function Page(){
    return(
        <div className="page ">
            <div className="about-dark ">
                <img src={AboutDark}/>
            </div>
            <div className="text-black about-text p-8">
                <h3 className="about my-2 ">ABOUT OUR FURNITURE</h3>
                <p className="mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. At provident saepe voluptatum. Placeat fugiat repudiandae provident unde possimus ipsa nihil. Suscipit voluptate hic, magni soluta eaque culpa sequi quas quod.
                Eos, vero sit? Amet earum corporis nemo quam iusto nam reiciendis quas blanditiis dolorem sapiente necessitatibus animi perspiciatis officia aspernatur nisi dolores sunt quibusdam.</p>
            </div>
            <div className="about-light">
                <img src={AboutLight}/>
            </div>

        </div>
    )
}