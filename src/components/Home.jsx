import React from "react";
import HeroImage from "../assets/heroImage_3.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { AiOutlineDownload } from "react-icons/ai";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800 via-black"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Hello! I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I am an undergraduate student of Computer Engineering at Thapar
            Institute of Engineering and Technology, Patiala. I am into
            programming and want to work in the field of software engineering.
          </p>
          <div className="flex items-center">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className=" group text-white w-fit px-6 py-3 my-2 flex items-centre rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
            <button className=" m-4 group text-white w-fit px-6 py-3 my-2 flex items-centre rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              <a href="/My_Resume.pdf" target="_blank" rel="noreferrer">
                Resume
              </a>
              <span>
                <AiOutlineDownload size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
