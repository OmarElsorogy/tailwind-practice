import React, { useContext } from "react";
import cn from "classnames";
import { ThemeContext } from "../../../contexts/UIContext";
import { SIDEBAR_MENUS } from "./constants";
import Button from "../../Button";
const Sidebar = ({ className, isShrunk, setShrunk }) => {
  const themeContext = useContext(ThemeContext);

  return (
    <aside
      className={cn(
        "fixed lg:relative flex flex-col w-[240px] h-[100vh] text-basepy-10 transition-all border-r  border-gray-700 duration-300",
        {
          "!w-[50px]": isShrunk,
        },
        {
          "bg-tairnary text-white": themeContext.appTheme == "dark",
          "bg-white text-tairnary": themeContext.appTheme == "light",
        },
        className
      )}
    >
      <div className="absolute -right-5 w-fit">
        <Button
          variant="secondary"
          size="auto"
          className={cn("rounded-md text-white p-2.5 hidden lg:block")}
          onClick={() => setShrunk(!isShrunk)}
        >
          <svg
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            strokeWidth="1.5"
            className={cn("stroke-current transition duration-300", {
              "rotate-180": isShrunk,
            })}
          >
            <path
              fillRule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
        </Button>
      </div>

      {SIDEBAR_MENUS.map((menu) => (
        <div key={menu.id}>
          {menu.has_title && (
            <h4
              className={cn("text-secondary font-semibold  px-3", {
                "opacity-0 invisible": isShrunk,
                "opacity-100 delay-200": !isShrunk,
              })}
            >
              {menu.title}
            </h4>
          )}
          <ul className={cn({ "mt-24 ": !menu.has_title })}>
            {menu.content.map((item) => (
              <li
                className={cn(
                  " flex items-center space-x-2 hover:bg-gray-700 pl-4 py-1 "
                )}
                key={item.id}
              >
                <div>{item.icon}</div>
                <span
                  className={cn("transition-opacity whitespace-nowrap", {
                    "opacity-0 invisible": isShrunk,
                    "opacity-100 delay-200": !isShrunk,
                  })}
                >
                  {item.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
