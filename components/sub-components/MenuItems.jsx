import React from "react";
import Link from "next/link";

const MenuItems = ({ links, currentPage, toggle, screen }) => {
  const { to, Icon, name } = links;

  return (
    <div className="relative item-hover py-1">
      <Link href={to}>
        <div
          className={`absolute h-full w-1 rounded-l-xl z-20 bg-white right-0  ${
            currentPage == to ? " block" : " hidden"
          }`}
        ></div>
        <div
          className={`flex gap-5 h-10 px-4 mx-1 rounded-lg font-light items-center  `}
        >
          <h2 className="icons bg-white rounded-full border shadow-lg p-1">
            <Icon className="w-6 h-6" />
          </h2>
          {screen == "mobile" ? (
            <>
              {toggle ? (
                <span className="text-white text-xl">{name}</span>
              ) : (
                <></> // or null, to render nothing
              )}
            </>
          ) : (
            <>
              {!toggle ? (
                <span className="text-white text-xl">{name}</span>
              ) : (
                <span></span> // or null, to render nothing
              )}
            </>
          )}
        </div>
      </Link>
    </div>
  );
};

export default MenuItems;
