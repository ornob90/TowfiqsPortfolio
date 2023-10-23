import React from "react";
import Container from "../../components/shared/Container";
import HeroHeader from "./HeroHeader";

const Hero = () => {
  return (
    <div className="bg-black">
      <Container>
        <HeroHeader />
      </Container>
    </div>
  );
};

export default Hero;
