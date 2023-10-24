import React from "react";
import Button from "../../components/shared/Button";

const HeroContent = () => {
  return (
    <div className="flex justify-center items-center flex-col h-[80%] ">
      <h1 className="text-4xl sm:text-7xl">
        Idea to <span className="text-secondary">Reality</span>
      </h1>
      <h3 className="text-2xl sm:text-5xl pb-8">
        Your <span className="text-secondary">Frontend Developer</span>
      </h3>

      <div className="grid grid-cols-6 gap-x-1 gap-y-2 sm:flex sm:justify-center sm:items-center  sm:gap-8 text-[10px] sm:text-base w-[80%] sm:w-full">
        <Button className="order-1 col-span-3 sm:bg-[rgba(0, 0, 0, 0.46)] border border-white w-full sm:w-max sm:px-8  ">
          ABOUT ME
        </Button>

        <div className="order-2 sm:order-1 col-span-6  flex justify-center items-center sm:block">
          <Button className=" bg-white text-black border border-secondary w-full sm:w-auto sm:px-12 ">
            HIRE ME
          </Button>
        </div>

        <Button className="order-1 bg-[rgba(0, 0, 0, 0.46)] border border-white sm:px-8  col-span-3">
          MY WORK
        </Button>
      </div>
    </div>
  );
};

export default HeroContent;