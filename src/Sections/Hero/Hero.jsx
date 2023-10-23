import React from "react";
import Container from "../../components/shared/Container";
import HeroHeader from "./HeroHeader";
import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <div className="relative hero-bg h-screen min-h-[200px] text-white font-bold">
      {/* <img
        src="./assets/hero-bg.png"
        alt=""
        className="h-screen w-full object-cover"
      /> */}
      <Container className="absolute top-0 left-[5%]  h-full">
        <HeroHeader />
        <HeroContent />
      </Container>
    </div>
  );
};

export default Hero;
