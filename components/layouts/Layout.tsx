import React from "react";
import Hero from "../marketing/Hero";
import Navbar from "../navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="h-screen bg-blue-100">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
