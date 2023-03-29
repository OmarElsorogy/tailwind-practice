import { useContext } from "react";
import cn from "classnames";
import { ThemeContext } from "../../../contexts/UIContext";

const Card = ({ title, image, children }) => {
  const themeContext = useContext(ThemeContext);
  return (
    <div
      className={cn(
        "flex flex-col w-full bg-tairnary text-white px-4 py-2 border rounded-md max-w-sm h-80",
        {
          "bg-tairnary text-white": themeContext.appTheme == "dark",
          "bg-gray-300 text-black": themeContext.appTheme == "light",
        }
      )}
    >
      <CardTitle>{title}</CardTitle>
      {image && <CardImage className="my-2" src={image} />}
      <div>{children}</div>
    </div>
  );
};

const CardTitle = ({ children, className }) => {
  const themeContext = useContext(ThemeContext);

  return (
    <h4
      className={cn(
        "font-bold  text-xl",
        {
          " text-white": themeContext.appTheme == "dark",
          " text-black": themeContext.appTheme == "light",
        },
        className
      )}
    >
      {children}
    </h4>
  );
};

const CardImage = ({ src, className, ...rest }) => (
  <img
    alt="..."
    className={cn("w-full h-40 object-cover rounded-xl", className)}
    src={src}
    {...rest}
  />
);

export default Card;
