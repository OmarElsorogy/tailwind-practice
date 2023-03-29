import React, { useContext } from "react";
import cn from "classnames";
import { ThemeContext } from "../contexts/UIContext";
import logo from "../img/logo.svg";
import Button from "./Button";

const Header = ({ toggleSidebar }) => {
  const themeContext = useContext(ThemeContext);
  return (
    <nav
      className={cn(
        "flex flex-row justify-between h-[56px] px-4 items-center  border-b border-gray-700 ",
        {
          "bg-primary text-white": themeContext.appTheme == "dark",
          "bg-white text-primary": themeContext.appTheme == "light",
        }
      )}
    >
      <Button
        size="small"
        className=" lg:hidden p-2 px-5 text-secondary"
        onClick={toggleSidebar}
      >
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          class="w-7 h-7 pointer-events-none"
        >
          <path
            d="M19 16a1 1 0 01.117 1.993L19 18H5a1 1 0 01-.117-1.993L5 16h14zm0-5a1 1 0 01.117 1.993L19 13H5a1 1 0 01-.117-1.993L5 11h14zm0-5a1 1 0 01.117 1.993L19 8H5a1 1 0 01-.117-1.993L5 6h14z"
            fill="currentcolor"
            fill-rule="evenodd"
          ></path>
        </svg>
      </Button>
      <div className=" pt-2 hidden lg:block">
        <img src={logo} alt="logo" />
      </div>
      <div>
        <Button
          size="small"
          // variant="primary"
          onClick={themeContext.toggleTheme}
          className={cn(
            "hidden lg:block p-2 px-5 font-semibold  rounded-xl baseline hover:bg-gray-700 hover:text-white",
            {
              "bg-black text-white": themeContext.appTheme == "light",
              "bg-white text-black": themeContext.appTheme == "dark",
            }
          )}
        >
          {themeContext.appTheme == "dark" ? "Light Mode" : "Dark Mode"}
        </Button>
      </div>
    </nav>
  );
};

export default Header;
