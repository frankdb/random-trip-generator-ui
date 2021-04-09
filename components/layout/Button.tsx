import React from "react";

const Button = ({ type, text, handleClick, fullWidth, color }) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      className={`${
        fullWidth === "true" ? "w-full" : ""
      } px-4 py-2 font-bold text-white ${color} mt-4 mb-4 border border-transparent rounded-md shadow-sm hover:opacity-95 focus:outline-none`}
    >
      {text}
    </button>
  );
};

export default Button;
