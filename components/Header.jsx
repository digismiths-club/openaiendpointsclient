"use client";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Navbar from "./Navbar";
// import NavBar from "../navbar/NavBar";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      {/* Header div */}
      <div
        className={`w-full h-14 items-center bg-neutral-700 flex justify-between px-5 ${
          toggle ? " " : " mb-5"
        }`}
      >
        <div className="my-3">
          <img
            alt="logo"
            src="/digismiths-logo-black-theme.svg"
            className={`w-40 2xl:w-56  z-30 h-10`}
          />
        </div>
        {toggle ? (
          <HiX
            onClick={() => setToggle(!toggle)}
            className="filter invert w-6 z-20 h-6 cursor-pointer"
          />
        ) : (
          <HiMenu
            onClick={() => setToggle(!toggle)}
            className="filter invert w-6 z-20 h-6 cursor-pointer"
          />
        )}
      </div>
      {/* Animated Navbar */}
      <div
        className={`bg-neutral-700 pt-4 transition-all duration-500 ease-in-out ${
          toggle ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <Navbar toggle={toggle} screen={"mobile"} />
      </div>
    </>
  );
};

export default Header;
