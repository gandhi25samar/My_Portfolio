import React from "react";
import keeperApp from "../assets/portfolio/keeperApp.jpg";
import bhumi from "../assets/portfolio/bhumi.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: keeperApp,
      href_demo: "https://samar-keeper.netlify.app/",
      href_code: "https://github.com/gandhi25samar/Keeper.git",
    },
    {
      id: 2,
      src: bhumi,
      href_demo: "https://samar-bhumi-ngo.netlify.app/",
      href_code: "https://github.com/gandhi25samar/Bhumi.git",
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="py-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href_code, href_demo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={href_demo} target="_blank" rel="noreferrer">
                    Demo
                  </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={href_code} target="_blank" rel="noreferrer">
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
