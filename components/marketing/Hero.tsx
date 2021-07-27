import { useRouter } from "next/router";
import React from "react";
import Button from "../application-ui/elements/Button";

interface HeroProps {
  backgroundColor: string;
  header: string;
  subheader: string;
  fontColor?: string;
  showCTAButton?: boolean;
  ctaButtonLink?: string;
}

const Hero = ({
  backgroundColor,
  header,
  subheader,
  fontColor = "text-black-400",
  showCTAButton = true,
  ctaButtonLink = "/signup",
}: HeroProps) => {
  const router = useRouter();

  const handleCTAButtonClick = () => {
    router.push(ctaButtonLink);
  };

  return (
    <div className={`w-100 px-4 py-32 sm:px-24 sm:py-24 ${backgroundColor}`}>
      <div className={`font-bold text-center ${fontColor}`}>
        <h1 className="text-4xl">{header}</h1>
        <p className="text-xl">{subheader}</p>
      </div>
      {showCTAButton ? (
        <div className="text-center">
          <Button
            type="button"
            label="Get Started"
            handleClick={() => handleCTAButtonClick()}
            colorScheme="blue"
            paddingX={8}
            paddingY={2}
            marginX="auto"
          />
        </div>
      ) : null}
    </div>
  );
};

export default Hero;
