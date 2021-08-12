import React, { MouseEventHandler } from "react";
import { IconBaseProps, IconContext } from "react-icons";
import { VscLoading } from "react-icons/vsc";

interface ButtonProps {
  label: string;
  type?: "button" | "submit" | "reset";
  handleClick?: MouseEventHandler<any>;
  colorScheme?: string;
  isFullWidth?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  paddingX?: number;
  paddingY?: number;
  marginX?: number | string;
  marginY?: number | string;
  fontSize?: "xs" | "sm" | "base" | "lg";
  icon?: IconBaseProps;
  variant?: "primary" | "secondary" | "tertiary";
  float?: "none" | "left" | "right";
}

const Button = ({
  label,
  type = "button",
  handleClick = () => {},
  isFullWidth = false,
  colorScheme = "blue",
  isDisabled = false,
  isLoading = false,
  paddingX = 4,
  paddingY = 2,
  marginX = 0,
  marginY = 4,
  fontSize = "base",
  icon = null,
  variant = "primary",
  float = "none",
}: ButtonProps) => {
  const fullWidth = isFullWidth ? "w-full" : "";

  const baseClasses = `px-${paddingX} py-${paddingY} text-${fontSize} mx-${marginX} my-${marginY} inline-flex justify-center items-center rounded-md transition duration-300 ease-in-out font-bold focus:outline-none ${fullWidth} float-${float}`;

  const primaryButtonClasses = `shadow-sm text-white border border-transparent bg-${colorScheme}-500 hover:bg-${colorScheme}-600 disabled:cursor-not-allowed disabled:opacity-60 focus:border-${colorScheme}-300 focus:ring-2`;

  const secondaryButtonClasses = `shadow-sm text-${colorScheme}-600 bg-white border-2 border-${colorScheme}-500 focus:ring-${colorScheme}-400 focus:ring-opacity-50 hover:bg-${colorScheme}-300 focus:ring-2`;

  const tertiaryButtonClasses = `text-${colorScheme}-600 hover:text-${colorScheme}-800`;

  const variantClasses =
    variant === "primary"
      ? primaryButtonClasses
      : variant === "secondary"
      ? secondaryButtonClasses
      : tertiaryButtonClasses;

  const finalClasses = baseClasses + " " + variantClasses;

  return (
    <button
      type={type}
      onClick={handleClick}
      className={finalClasses}
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
      {label}
    </button>
  );
};

export default Button;
