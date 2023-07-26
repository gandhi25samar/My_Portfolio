import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-10 mt-10">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-10">
          My name is Samarjeet Singh Gandhi and I am a passionate and ambitious
          computer engineering student at Thapar Institute of Engineering and
          Technology, Patiala, with a deep-rooted love for programming and
          full-stack development. My journey into the world of programming began
          early in my academic career, where I discovered the power of turning
          ideas into reality through lines of code. Over the years, I have honed
          my skills in various programming languages and frameworks, including
          Python, JavaScript, Java, HTML, CSS, and more. This versatility allows
          me to approach projects from multiple angles and come up with
          innovative solutions.
        </p>
        <br />
        <p className="text-xl">
          Besides coding, I am an avid collaborator and enjoy working in teams.
          I find the exchange of ideas and collective problem-solving process
          incredibly enriching. My communication skills, adaptability, and
          eagerness to learn make me an effective team player and contribute
          positively to any project I'm involved in.
        </p>
      </div>
    </div>
  );
};

export default About;
