import burguerMenu from "../assets/images/icon-hamburger.svg";
import { useState } from "react";

export const Navbar = () => {
  const [menuClicked, setMenuClicked] = useState(false);

  const handleClick = () => {
    setMenuClicked((prevState) => !prevState);
  };

  return (
    <nav className=" ">
      <ul
        className={`bg-white w-[329px] h-[305px] absolute left-0 right-0 mx-auto top-[106px] flex-col items-center place-content-around after:content-[''] after:absolute after:top-[-28px] after:right-0 after:border-[16px] after:border-b-white after:border-r-white after:border-l-transparent after:border-t-transparent text-Very-dark-grayish-blue text-xl font-semibold z-10 
      
        sm:flex sm:after:hidden sm:flex-row sm:top-0 sm:w-[400px] sm:bg-transparent sm:h-[24px] sm:relative sm:left-0 sm:place-content-between


        ${menuClicked ? "flex" : "hidden"}`}
      >
        <li className="cursor-pointer sm:text-White">About</li>
        <li className="cursor-pointer sm:text-White">Services</li>
        <li className="cursor-pointer sm:text-White">Projects</li>
        <li
          className="cursor-pointer bg-Yellow w-[140px] h-[50px] grid place-content-center rounded-full font-Fraunces text-Very-dark-desaturated-blue uppercase text-base
        
          sm:h-[26px] sm:w-[100px] sm:bg-White sm:py-5 sm:text-Black sm:hover:bg-opacity-25  sm:hover:text-White
          
         
          "

          
        >
          Contact
        </li>
      </ul>
      <div className="cursor-pointer sm:hidden" onClick={handleClick}>
        <img src={burguerMenu} alt="burguerMenu" />
      </div>
    </nav>
  );
};
