import React from "react";
import Hero1Mobile from "./images/mobile-image-hero-1.jpg";
import Hero2Mobile from "./images/mobile-image-hero-2.jpg";
import Hero3Mobile from "./images/mobile-image-hero-3.jpg";
import Hero1Deskop from "./images/desktop-image-hero-1.jpg";
import Hero2Deskop from "./images/desktop-image-hero-2.jpg";
import Hero3Deskop from "./images/desktop-image-hero-3.jpg";
import Arrow from "./images/icon-arrow.svg";
import AngleRight from "./images/icon-angle-right.svg";
import AngleLeft from "./images/icon-angle-left.svg";
import Navbar from "./Navbar";

// import Navbar from "./Navbar";

export default function Hero(props){

    const [count, setCount] = React.useState(0)

    const DesktopImg = [
        {"src":Hero1Deskop, "key":1},
        {"src":Hero2Deskop, "key":2},
        {"src":Hero3Deskop, "key":3}
    ]

    const MobileImg = [
        {"src":Hero1Mobile, key:1},
        {"src":Hero2Mobile, key:2},
        {"src":Hero3Mobile, key:3}
    ]

    function increment(){
        // this function stops the increment at 2
        setCount((prev)=> {
            if (prev === 2)
                return prev;
            return prev + 1
        })
        }
    
    function decrement(){
        // this function stops the decrement at 0
        setCount((prev)=> {
            if (prev === 0)
                return prev;
            return prev - 1
        })
    }

    const specificImage = props.screen > 470? DesktopImg : MobileImg
    
    return(
        <div className="hero">
            <div className="hero--img">
                <img src={specificImage[count].src}/>
                {/* <Navbar/> */}
                <Navbar screen={props.screen}/>
            </div>
            <div className="hero-text text-black">
                <div className="text--proper m-8">
                    <h2 className="my-6">Discover innovative ways to decorate</h2>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, et. Id architecto amet dolore dolor placeat ratione facilis vero pariatur quibusdam ducimus sit impedit doloribus reiciendis, ad earum? Eaque, voluptas!
                    Nostrum consequuntur hic porro eos inventore rem, reiciendis fugiat assumenda aliquam eum eaque iure mollitia odio eius optio illum molestiae. 
                </div>
                <div className="shop-box m-8">
                    <span className="shop">SHOP NOW </span> <span className="p-2"><img src={Arrow}/></span>
                </div>
                <div className="mt-10 flex bg-black arrow-box">
                    <img src={AngleLeft} className="p-2 m-2" onClick={decrement}/>
                    <img src={AngleRight} className="p-2 m-2" onClick={increment}/>
                </div>

            </div>
            
        </div>
    )
}