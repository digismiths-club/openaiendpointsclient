"use client";
import React, { useState } from "react";
// import logo from "/digismiths-logo-black-theme.svg";
import { HiArrowLeft, HiArrowRight, HiSearch } from "react-icons/hi";
import { menuOptions, menuOptionsTwo } from "@/data/menu";
import MenuItems from "./sub-components/MenuItems";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  const currentPage = usePathname();

  return (
    // Sidebar div
    <div
      className={` ${
        toggle ? "w-20" : "w-1/5"
      } bg-neutral-700 transition-width duration-500 linear`}
    >
      {/* Heading div */}
      <div className="heading flex items-center mt-4">
        <img
          alt="logo"
          src="/digismiths-logo-black-theme.svg"
          className={`w-40 2xl:w-56  z-30 ${
            toggle ? "opacity-0 h-10" : "ml-6 opacity-100"
          }`}
        />

        <div
          onClick={() => setToggle(!toggle)}
          style={{ transition: "left 0.3s linear" }}
          className={`absolute top-2 ${
            toggle ? "left-16" : "left-little"
          } w-14 h-14 p-1 bg-white z-20 border-r-2 shadow-lg rounded-full cursor-pointer flex items-center justify-center`}
        >
          {toggle ? <HiArrowRight /> : <HiArrowLeft />}
        </div>
      </div>
      {/* Search div */}
      <div
        className={`search flex  mx-auto h-10 my-5 px-2 py-1 border  shadow rounded-full bg-white items-center ${
          toggle ? "w-10" : "w-11/12"
        }`}
      >
        <h3 className=" cursor-pointer">
          <HiSearch className="w-6 h-6" />
        </h3>
        {!toggle && (
          <span>
            <input
              placeholder="Search"
              type="text"
              className="px-2 bg-transparent w-full overflow-hidden outline-none"
            />
          </span>
        )}
      </div>
      {/* Home div */}
      <div className="homeicon py-3 flex flex-col gap-9">
        <MenuItems
          links={menuOptions[0]}
          currentPage={currentPage}
          toggle={toggle}
        />
        <MenuItems
          links={menuOptions[1]}
          currentPage={currentPage}
          toggle={toggle}
        />
        <MenuItems
          links={menuOptions[2]}
          currentPage={currentPage}
          toggle={toggle}
        />
        <MenuItems
          links={menuOptions[3]}
          currentPage={currentPage}
          toggle={toggle}
        />
        <MenuItems
          links={menuOptions[4]}
          currentPage={currentPage}
          toggle={toggle}
        />
      </div>
    </div>
  );
};

export default Sidebar;
