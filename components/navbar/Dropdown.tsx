import Link from "next/link";
import React from "react";

const Dropdown = () => {
  return (
    <div className="absolute flex flex-col w-32 text-gray-800 bg-white bg-blue-200 rounded-sm right-5 top-16">
      <div className="p-2 pointer hover:bg-blue-300">
        <Link href="/randomtripgenerator">Random Trip Generator</Link>
      </div>
      <div className="p-2 pointer hover:bg-blue-300">
        <Link href="/login">Log In</Link>
      </div>
      <div className="p-2 pointer hover:bg-blue-300">
        <Link href="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default Dropdown;
