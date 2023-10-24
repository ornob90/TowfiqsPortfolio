import React from "react";
import Button from "../../components/shared/Button";

const HeroHeader = () => {
  return (
    <div className="flex justify-between w-full pt-8 items-center h-[12%]">
      <img
        src="/assets/logo.png"
        alt=""
        className="w-[33%] sm:w-[25%] md:w-[18%] lg:w-[13%]"
      />
      <div>
        <Button className="bg-[rgba(0, 0, 0, 0.46)] border border-white text-white text-[10px] md:text-base px-5 py-1">
          RESUME
        </Button>
      </div>
    </div>
  );
};

export default HeroHeader;
