import React, { MouseEventHandler } from "react";
import { IconContext } from "react-icons";
import { VscLoading } from "react-icons/vsc";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  text: string;
  handleClick: MouseEventHandler<any>;
  color?: string;
  isFullWidth?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
}

const Button = ({
  type,
  text,
  handleClick,
  isFullWidth = false,
  color = "bg-blue-500",
  isDisabled = false,
  isLoading = false,
}: ButtonProps) => {
  const width = isFullWidth === true ? "w-full" : "";
  return (
    <button
      type={type}
      onClick={handleClick}
      className={`${width} px-4 py-2 font-bold text-white ${color} mt-4 mb-4 border border-transparent rounded-md shadow-sm hover:opacity-95 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 inline-flex justify-center`}
      disabled={isDisabled || isLoading}
    >
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
