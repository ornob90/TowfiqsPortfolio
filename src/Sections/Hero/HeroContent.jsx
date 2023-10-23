import React from "react";
import Button from "../../components/shared/Button";

const HeroContent = () => {
  return (
    <div className="flex justify-center items-center flex-col h-[80%] ">
      <h1 className="text-7xl">
        Idea to <span className="text-secondary">Reality</span>
      </h1>
      <h3 className="text-5xl pb-8">
        Your <span className="text-secondary">Frontend Developer</span>
      </h3>

      <div className="flex justify-center items-center gap-8">
        <Button className="bg-[rgba(0, 0, 0, 0.46)] border border-white px-8  ">
          ABOUT ME
        </Button>
        <Button className="bg-white text-black border border-secondary px-8 hover:bg-transparent hover:text-white">
          HIRE ME
        </Button>
        <Button className="bg-[rgba(0, 0, 0, 0.46)] border border-white px-8  ">
          MY WORK
        </Button>
      </div>
    </div>
  );
};

export default HeroContent;
