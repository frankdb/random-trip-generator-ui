import React from "react";
import Hero from "../marketing/Hero";
import Navbar from "../navbar/Navbar";

const ContentLayout = ({ children }) => {
  return <div className="container p-4 mx-auto sm:p-16">{children}</div>;
};

export default ContentLayout;
