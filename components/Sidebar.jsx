"use client";
import React, { useState } from "react";
// import logo from "/digismiths-logo-black-theme.svg";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className={` ${
        toggle ? "w-20" : "w-1/5"
      } bg-neutral-700 transition-width duration-500 linear`}
    >
      <div className="heading flex items-center mt-4">
        {!toggle && (
          <img
            alt="logo"
            src="/digismiths-logo-black-theme.svg"
            className={`w-56 z-30 ${toggle ? "mx-auto" : "ml-6"}`}
          />
        )}

        <div
          onClick={() => setToggle(!toggle)}
          style={{ transition: "left 0.3s linear" }}
          className={`absolute top-2 ${
            toggle ? "left-16" : "left-72"
          } w-14 h-14 p-1 bg-white z-20 border-r-2 shadow-lg rounded-full cursor-pointer flex items-center justify-center`}
        >
          {toggle ? <HiArrowRight /> : <HiArrowLeft />}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
