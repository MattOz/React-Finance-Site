import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <p className="py-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
          ullam iste repellat consequatur libero reiciendis, blanditiis
          accusantium.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <a href="https://github.com/MattOz" className="hover:text-[#00df9a]">
            <FaFacebookSquare size={30} />
          </a>
          <a href="https://github.com/MattOz" className="hover:text-[#00df9a]">
            <FaInstagram size={30} />
          </a>
          <a href="https://github.com/MattOz" className="hover:text-[#00df9a]">
            <FaTwitterSquare size={30} />
          </a>
          <a href="https://github.com/MattOz" className="hover:text-[#00df9a]">
            <FaGithubSquare size={30} />
          </a>
          <a href="https://github.com/MattOz" className="hover:text-[#00df9a]">
            <FaDribbbleSquare size={30} />
          </a>
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400">Services</h6>
          <ul>
            <li className="py-2 text-sm hover:text-[#00df9a]">Website Design</li>
            <li className="py-2 text-sm hover:text-[#00df9a]">Front End Frameworks</li>
            <li className="py-2 text-sm hover:text-[#00df9a]">UI/UX Consulting</li>
            <li className="py-2 text-sm hover:text-[#00df9a]">Performance Optimization</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Development</h6>
          <ul>
            <li className="py-2 text-sm hover:text-[#00df9a]">JavaScript Development</li>
            <li className="py-2 text-sm hover:text-[#00df9a]">HTML/CSS Development</li>
            <li className="py-2 text-sm hover:text-[#00df9a]">Responsive Web Design</li>
            <li className="py-2 text-sm hover:text-[#00df9a]">Cross-Browser Compatibility</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Projects</h6>
          <ul>
            <li className="py-2 text-sm hover:text-[#00df9a]">Gamer's Circuit</li>
            <li className="py-2 text-sm hover:text-[#00df9a]">Chicago HotSpot</li>
            <li className="py-2 text-sm hover:text-[#00df9a]">React Admin Dashboard</li>
            <li className="py-2 text-sm hover:text-[#00df9a]">Pupify</li>
            <li className="py-2 text-sm hover:text-[#00df9a]">Weather Dashboard</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Sample Sites</h6>
          <ul>
            <li className="py-2 text-sm hover:text-[#00df9a]">Site 1</li>
            <li className="py-2 text-sm hover:text-[#00df9a]">Site 2</li>
            <li className="py-2 text-sm hover:text-[#00df9a]">Site 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
