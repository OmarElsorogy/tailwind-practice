import React, { useContext } from "react";
import cn from "classnames";
import { ThemeContext } from "../../contexts/UIContext";
import Button from "../Button";
const Modal = ({ isVisible, onClose }) => {
  const themeContext = useContext(ThemeContext);
  const submitComment = () => {};
  if (!isVisible) return null;
  return (
    <div
      className="flex justify-center items-center fixed inset-0 bg-white bg-opacity-25 backdrop-blur-sm text-white"
      onClick={onClose}
      id="wrapper"
    >
      <div className="flex flex-col w-80 h-40  bg-tairnary p-2 rounded">
        <h3>Add a comment</h3>
        <textarea className="mt-2 text-black contrast:border-slate-400" />
        <Button
          id="wrapper"
          onClick={onClose}
          className={cn(
            " w-[100px] h-[40px] font-semibold  mt-3 rounded-lg baseline hover:bg-gray-700 hover:text-white",
            {
              "bg-black text-white": themeContext.appTheme == "light",
              "bg-white text-black": themeContext.appTheme == "dark",
            }
          )}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Modal;
