"use client";
import React, { useState } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
// import logo from "/digismiths-logo-black-theme.svg";

import Navbar from "./sub-components/Navbar";

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      {/* Sidebar div */}
      <div
        className={` ${
          toggle ? "w-20" : "w-1/5"
        } bg-neutral-700 transition-width duration-500 linear`}
      >
        {/* Arrow buttons */}
        <div
          onClick={() => setToggle(!toggle)}
          style={{ transition: "left 0.3s linear" }}
          className={`absolute top-2 ${
            toggle ? "left-16" : "left-little"
          } w-14 h-14 p-1 bg-white z-20 border-r-2 shadow-lg rounded-full cursor-pointer flex items-center justify-center`}
        >
          {toggle ? <HiArrowRight /> : <HiArrowLeft />}
        </div>
        {/* Heading div */}
        <div className="heading flex items-center pt-4">
          <img
            alt="logo"
            src="/digismiths-logo-black-theme.svg"
            className={`w-40 2xl:w-56  z-30 ${
              toggle ? "opacity-0 h-10" : "ml-6 opacity-100"
            }`}
          />
        </div>
        <Navbar toggle={toggle} />
      </div>
    </>
  );
};

export default Sidebar;
