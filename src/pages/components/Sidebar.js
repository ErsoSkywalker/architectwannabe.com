import React, { useState } from "react";
import { useRouter } from "next/router";
import { FiGithub, FiLinkedin, FiUser } from "react-icons/fi";
import {
  HiArrowRightOnRectangle,
  HiArrowLeftOnRectangle,
} from "react-icons/hi2";
import { BiHomeAlt2, BiSearchAlt } from "react-icons/bi";
const Sidebar = () => {
  const router = useRouter();
  const [barOpen, setBarOpen] = useState(false);
  return (
    <>
      <div
        className={`${
          barOpen ? "w-screen md:w-72" : "w-0 md:w-16 md:scale-100 origin-left"
        } h-screen duration-[500ms] delay-[21ms] bg-orange-400 fixed sm:visible shadow-lg`}
      >
        <div
          className={`${
            barOpen ? "" : ""
          } h-full w-full flex flex-col gap-5 gap-x-10 py-10 relative`}
        >
          <button
            className={`${
              barOpen
                ? ""
                : "scale-x-0 transition origin-left duration-500 md:scale-x-100"
            } rounded-lg p-2 bg-orange-200 hover:bg-orange-300 shadow-lg mx-2`}
            onClick={() => router.push("/")}
          >
            <div className="flex gap-x-4">
              <div className="cursor-pointer">
                <BiHomeAlt2 size={33} />
              </div>
              <p
                className={`${
                  !barOpen && "scale-x-0"
                } origin-left text-2xl duration-300`}
              >
                Home
              </p>
            </div>
          </button>
          <button
            className={`${
              barOpen
                ? ""
                : "scale-x-0 transition origin-left duration-500 md:scale-x-100"
            } rounded-lg p-2 bg-orange-200 hover:bg-orange-300 shadow-lg mx-2`}
            onClick={() => setBarOpen(true)}
          >
            <div className="flex gap-x-4">
              <div className="cursor-pointer">
                <BiSearchAlt size={33} />
              </div>
              <p
                className={`${
                  !barOpen && "scale-x-0"
                } origin-left text-2xl duration-300`}
              >
                Search
              </p>
            </div>
          </button>
          <button
            className={`${
              barOpen
                ? ""
                : "scale-x-0 transition origin-left duration-500 md:scale-x-100"
            } rounded-lg p-2 bg-orange-200 hover:bg-orange-300 shadow-lg mx-2`}
            onClick={() => router.push("/me")}
          >
            <div className="flex gap-x-4">
              <div className="cursor-pointer">
                <FiUser size={33} />
              </div>
              <p
                className={`${
                  !barOpen && "scale-x-0"
                } origin-left text-2xl duration-300`}
              >
                Me
              </p>
            </div>
          </button>
          <a
            className={`${
              barOpen
                ? ""
                : "scale-x-0 transition origin-left duration-500 md:scale-x-100"
            } rounded-lg p-2 bg-orange-200 hover:bg-orange-300 shadow-lg mx-2`}
            target="_blank"
            href="https://www.github.com/ErsoSkywalker"
          >
            <div className="flex gap-x-4">
              <div className="cursor-pointer">
                <FiGithub size={33} />
              </div>
              <p
                className={`${
                  !barOpen && "scale-x-0"
                } origin-left text-2xl duration-300`}
              >
                GitHub
              </p>
            </div>
          </a>
          <a
            className={`${
              barOpen
                ? ""
                : "scale-x-0 transition origin-left duration-500 md:scale-x-100"
            } rounded-lg p-2 bg-orange-200 hover:bg-orange-300 shadow-lg mx-2`}
            target="_blank"
            href="https://www.linkedin.com/in/christianontiveros/"
          >
            <div className="flex gap-x-4">
              <div className="cursor-pointer">
                <FiLinkedin size={33} />
              </div>
              <p
                className={`${
                  !barOpen && "scale-x-0"
                } origin-left text-2xl duration-300`}
              >
                LinkedIn
              </p>
            </div>
          </a>
          <button
            className={`${
              barOpen ? "" : "scale-x-0 transition origin-left duration-500"
            } rounded-lg p-2 bg-orange-200 hover:bg-orange-300 shadow-lg w-[95%] mx-2 md:invisible absolute top-[85%]`}
            onClick={() => setBarOpen(false)}
          >
            <div className="flex gap-x-4">
              <div className="cursor-pointer">
                <HiArrowLeftOnRectangle size={33} />
              </div>
            </div>
          </button>
        </div>
      </div>
      <button
        onClick={() => setBarOpen(!barOpen)}
        className={`${
          barOpen
            ? "invisible md:visible md:left-72 md:-translate-x-1/2"
            : "visible left-2 translate-x-1/2"
        }  bg-orange-200 md:transition-all md:duration-[495ms]  hover:bg-orange-300 rounded-full p-3 absolute top-[85%]`}
      >
        {barOpen ? (
          <HiArrowLeftOnRectangle size={33} />
        ) : (
          <HiArrowRightOnRectangle size={33} />
        )}
      </button>
    </>
  );
};

export default Sidebar;
