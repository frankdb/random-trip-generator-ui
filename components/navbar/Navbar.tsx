import React, { useState } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { IconContext } from "react-icons";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    console.log("showDropdown value:", showDropdown);
  };

  return (
    <nav className="bg-gray-800 w-100">
      <div className="container flex flex-row justify-between px-4 py-6 mx-auto font-bold text-purple-400">
        <div>
          <div>
            <Link href="/">Home</Link>
          </div>
        </div>
        <div className="flex-row hidden sm:flex">
          <div className="px-3 cursor-pointer">
            <Link href="/randomtripgenerator">Random Trip Generator</Link>
          </div>
          <div className="px-3 cursor-pointer">
            <Link href="/login">Log In</Link>
          </div>
          <div className="px-3 cursor-pointer">
            <Link href="/signup">Sign Up</Link>
          </div>
        </div>
        <div
          className="flex sm:hidden pointer"
          onClick={() => toggleDropdown()}
        >
          <IconContext.Provider value={{ size: "1.5em" }}>
            <FiMenu />
          </IconContext.Provider>
        </div>
        {!showDropdown ? null : <Dropdown />}
      </div>
    </nav>
  );
};

export default Navbar;
