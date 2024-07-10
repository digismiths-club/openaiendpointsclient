import React from "react";
import Link from "next/link";

const MenuItems = ({ links, currentPage, toggle }) => {
  const { to, Icon, name } = links;

  return (
    <div className="relative ">
      <Link href={to}>
        <div
          className={`absolute h-full w-1 rounded-l-xl z-20 bg-white right-0  ${
            currentPage == to ? " block" : " hidden"
          }`}
        ></div>
        <div
          className={`flex gap-5 h-10 px-4 mx-1 rounded-lg font-light items-center item-hover `}
        >
          <h2 className="icons bg-white rounded-full border shadow-lg p-1">
            <Icon className="w-8 h-8" />
          </h2>

          <span className={`text-white text-xl ${toggle ? "none" : ""}`}>
            {name}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default MenuItems;
