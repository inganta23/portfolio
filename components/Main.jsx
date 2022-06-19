import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center ">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            let's build something together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5651e5]">Johanes</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Front-End Developer</h1>
          <p className="text-gray-600 py-4 max-w-[70%] m-auto">
            I am an 8th semester student majoring in Computer Science,
            Universitas Sumatera Utara. Currently, I'm focused on building
            responsive front-end web applications while learning back-end
            technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pinter hover:scale-110 ease-in duration-300">
              <a
                href="https://www.linkedin.com/in/johanes-inganta-karo-karo-066193225/"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pinter hover:scale-110 ease-in duration-300">
              <a href="https://github.com/inganta23" target="_blank">
                <FaGithub />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pinter hover:scale-110 ease-in duration-300">
              <Link href="/#contact">
                <AiOutlineMail className="cursor-pointer" />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pinter hover:scale-110 ease-in duration-300">
              <a href="https://wa.me/+6281218191202" target="_blank">
                <BsFillPersonLinesFill />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
