import burguerMenu from "../assets/images/icon-hamburger.svg";
import { useState } from "react";

export const Navbar = () => {
const [menuClicked, setMenuClicked] = useState(false);

const handleClick  = () => {
    setMenuClicked(prevState => !prevState)
}

  return (
    <nav className="bg-green-400 w-full">
      <ul className={`bg-white w-[329px] h-[305px] absolute left-0 right-0 mx-auto top-[106px] flex-col items-center place-content-around after:content-[''] after:absolute after:top-[-28px] after:right-0 after:border-[16px] after:border-b-white after:border-r-white after:border-l-transparent after:border-t-transparent text-Very-dark-grayish-blue text-xl font-semibold 
      
      sm:flex sm:after:hidden sm:bg-transparent sm:flex-row sm:top-0 sm:w-[400px] sm:bg-red-600 sm:h-full sm:left-[400px] sm:place-items-end


        ${menuClicked ? 'flex' : 'hidden'}`}>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Services</li>
        <li className="cursor-pointer">Projects</li>
        <li className="cursor-pointer bg-Yellow w-[140px] h-[50px] grid place-content-center rounded-full font-Fraunces font-semibold text-Very-dark-desaturated-blue
        
        sm:rounded-none sm:bg-transparent sm:h-[26px]

        ">Contact</li>
      </ul>
      <div className="cursor-pointer sm:hidden" onClick={handleClick}>
          <img src={burguerMenu} alt="burguerMenu" />
        </div>
    </nav>
  );
};
