import React from "react";

interface HeroProps {
  backgroundColor: string;
  header: string;
  subheader: string;
}

const Hero = ({ backgroundColor, header, subheader }: HeroProps) => {
  return (
    <div
      className={`w-100 px-4 py-32 sm:px-24 sm:py-24 text-purple-400 font-bold text-center ${backgroundColor}`}
    >
      <h1 className="container text-4xl">{header}</h1>
      <p className="text-xl">{subheader}</p>
    </div>
  );
};

export default Hero;
