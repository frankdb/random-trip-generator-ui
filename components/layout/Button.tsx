import React, { MouseEventHandler } from "react";
import { IconBaseProps, IconContext } from "react-icons";
import { VscLoading } from "react-icons/vsc";

interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
  handleClick?: MouseEventHandler<any>;
  color?: string;
  isFullWidth?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  paddingX?: number;
  paddingY?: number;
  marginX?: number | string;
  marginY?: number | string;
  fontSize?: "xs" | "sm" | "base" | "lg";
  icon?: IconBaseProps;
}

const Button = ({
  text,
  type = "button",
  handleClick = () => {},
  isFullWidth = false,
  color = "bg-blue-500",
  isDisabled = false,
  isLoading = false,
  paddingX = 4,
  paddingY = 2,
  marginX = 0,
  marginY = 4,
  fontSize = "base",
  icon = null,
}: ButtonProps) => {
  const fullWidth = isFullWidth ? "w-full" : "";

  return (
    <button
      type={type}
      onClick={handleClick}
      className={`${fullWidth} px-${paddingX} py-${paddingY} text-${fontSize} font-bold text-white ${color} mx-${marginX} my-${marginY} border border-transparent rounded-md shadow-sm hover:opacity-95 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 inline-flex justify-center items-center focus:outline-none focus:ring-2 focus:border-blue-300`}
      disabled={isDisabled || isLoading}
    >
      {icon ? <span className="mr-2">{icon}</span> : null}
      {isLoading ? (
        <IconContext.Provider value={{ size: "1.25em" }}>
          <span className="mr-2 animate-spin">
            <VscLoading />
          </span>
        </IconContext.Provider>
      ) : null}
      {text}
    </button>
  );
};

export default Button;
