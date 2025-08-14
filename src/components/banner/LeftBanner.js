import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import {  SiReact ,SiNodedotjs , SiExpress ,SiMongodb} from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "MERN Stack Developer.",],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME CODERS WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">SANSAI</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
         Passionate individual with a strong focus on HTML, CSS, JavaScript Specializes in building
        dynamic and responsive web applications, with hands-on experience in both front-end and
        back-end development. Eager to contribute innovative solutions and grow as a professional in a
        collaborative team environment.
        </p>
      </div>
      <div className="flex-col xl:flex-row gap-2 lgl:gap-0 justify-between ">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
          <span className="mb-4">Find me in</span> 
          </h2>
          <div className="flex gap-4">
            <a href="https://github.com/SANSAI-FSD" target="blank">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            {/* <a href="https://github.com/noorjsdivs/portfolioone" target="blank">
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
            </a>
            <a href="https://github.com/noorjsdivs/portfolioone" target="blank">
              <span className="bannerIcon">
                <FaTwitter />
              </span>
            </a> */}
            <a href="https://www.linkedin.com/in/sansaiprofile/" target="blank">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4 mt-5">
            BEST SKILL ON
          </h2>
          <div className="flex mt-2 gap-4">
            <span className="bannerIcon ">
              <SiMongodb/>
            </span>
            <span className="bannerIcon">
              <SiExpress />
            </span>
            <span className="bannerIcon">
              <SiReact />
            </span>
            <span className="bannerIcon">
              <SiNodedotjs/>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
