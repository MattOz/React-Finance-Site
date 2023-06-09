import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">MATT OSBORNE</h1>
      <ul className="hidden md:flex">
        <ul className="hidden md:flex">
          <li className="p-4 hover:text-[#00df9a]">
            <a href="#">Home</a>
          </li>
          <li className="p-4 hover:text-[#00df9a]">
            <a href="#">About</a>
          </li>
          <li className="p-4 hover:text-[#00df9a]">
            <a href="#">Portfolio</a>
          </li>
          <li className="p-4 hover:text-[#00df9a]">
            <a href="#">Experience</a>
          </li>
          <li className="p-4 hover:text-[#00df9a]">
            <a href="#">Contact</a>
          </li>
        </ul>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">MATT OSBORNE</h1>
        <li className="p-4 border-b border-gray-600">Home</li>
        <li className="p-4 border-b border-gray-600">About</li>
        <li className="p-4 border-b border-gray-600">Portfolio</li>
        <li className="p-4 border-b border-gray-600">Experience</li>
        <li className="p-4 border-b border-gray-600">Contact</li>
        <li className="p-4">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
