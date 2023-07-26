import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import c from "../assets/c.png";
import cplus from "../assets/cplus.png";
import github from "../assets/github.png";
import java from "../assets/java.png";
import node from "../assets/node.png";
import react from "../assets/react.png";
import sql from "../assets/sql.png";
import tailwind from "../assets/tailwind.png";
import javascript from "../assets/javascript.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: c,
      title: "C",
      style: "shadow-blue-800",
    },
    {
      id: 5,
      src: cplus,
      title: "C++",
      style: "shadow-blue-800",
    },
    {
      id: 6,
      src: java,
      title: "Java",
      style: "shadow-blue-300",
    },
    {
      id: 7,
      src: react,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 8,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 9,
      src: node,
      title: "NodeJS",
      style: "shadow-orange-500",
    },
    {
      id: 10,
      src: sql,
      title: "SQL",
      style: "shadow-blue-400",
    },
    {
      id: 11,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];
  return (
    <div
      name="experience"
      className=" bg-gradient-to-b from-gray-800 to-black w-full h-screen "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="pt-8 mt-12">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-3 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={
                "shadow-md hover:scale-105 duration-500 py-4 rounded-lg" +
                " " +
                style
              }
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
