import React from "react";
import Button from "../layout/Button";

interface HeroProps {
  backgroundColor: string;
  header: string;
  subheader: string;
  fontColor?: string;
}

const Hero = ({
  backgroundColor,
  header,
  subheader,
  fontColor = "text-black-400",
}: HeroProps) => {
  return (
    <div className={`w-100 px-4 py-32 sm:px-24 sm:py-24 ${backgroundColor}`}>
      <div className={`font-bold text-center ${fontColor}`}>
        <h1 className="text-4xl">{header}</h1>
        <p className="text-xl">{subheader}</p>
      </div>
      <div className="text-center">
        <Button
          type="button"
          text="Get Started"
          handleClick={() => {}}
          color="bg-red-400"
          paddingX={8}
          paddingY={2}
          marginX="auto"
        />
      </div>
    </div>
  );
};

export default Hero;
