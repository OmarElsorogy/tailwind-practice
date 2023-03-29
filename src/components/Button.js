import React from "react";
import cn from "classnames";

const rootStyle = "flex-inline w-full h-full";

const variants = {
  primary: "bg-primary hover:contrast-125 filter text-black",
  secondary: "bg-secondary hover:contrast-125 text-white",
  pink: "bg-pink hover:contrast-125 text-white",
  unstyled: "",
};

const sizes = {
  large: "min-h-16 font-medium p-4 text-lg",
  medium: "min-h-12 font-medium px-3 py-4 text-lg",
  small: "min-h-10 p-2",
  auto: "",
};

const Button = ({ children, className, onClick, variant, size, ...rest }) => {
  const root = cn(
    rootStyle,
    variant && variants[variant],
    size && sizes[size],
    className
  );
  return (
    <button className={cn(root, className)} {...rest} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
