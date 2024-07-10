import React from "react";
import { HiSearch } from "react-icons/hi";
import { menuOptions, menuOptionsTwo } from "@/data/menu";
import MenuItems from "./sub-components/MenuItems";
import { usePathname } from "next/navigation";

const Navbar = ({ toggle, screen }) => {
  const currentPage = usePathname();
  return (
    <>
      {/* Search div */}
      <div
        className={`search bg-white flex mx-auto h-10  px-2 py-1 border z-100 shadow rounded-full items-center ${
          screen === "mobile"
            ? !toggle
              ? "w-11/12 py-5"
              : "w-11/12 py-5"
            : !toggle
            ? "w-11/12 my-5"
            : "w-10 my-5"
        }`}
      >
        <h3 className=" cursor-pointer">
          <HiSearch className="w-6 h-6" />
        </h3>
        {screen === "mobile"
          ? toggle && (
              <span className="w-full">
                <input
                  placeholder="Search"
                  type="text"
                  className="px-2 bg-transparent w-full overflow-hidden outline-none"
                />
              </span>
            )
          : !toggle && (
              <span className="w-full">
                <input
                  placeholder="Search"
                  type="text"
                  className="px-2 bg-transparent w-full overflow-hidden outline-none"
                />
              </span>
            )}
      </div>
      {/* Home div */}
      <div className="homeicon bg-neutral-700 py-5 flex flex-col gap-9">
        <MenuItems
          links={menuOptions[0]}
          currentPage={currentPage}
          toggle={toggle}
          screen={screen}
        />
        <MenuItems
          links={menuOptions[1]}
          currentPage={currentPage}
          toggle={toggle}
          screen={screen}
        />
        <MenuItems
          links={menuOptions[2]}
          currentPage={currentPage}
          toggle={toggle}
          screen={screen}
        />
        <MenuItems
          links={menuOptions[3]}
          currentPage={currentPage}
          toggle={toggle}
          screen={screen}
        />
        <MenuItems
          links={menuOptions[4]}
          currentPage={currentPage}
          toggle={toggle}
          screen={screen}
        />
      </div>
    </>
  );
};

export default Navbar;
