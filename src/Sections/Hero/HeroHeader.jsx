import React from "react";
import Button from "../../components/shared/Button";

const HeroHeader = () => {
  return (
    <div className="flex justify-between w-full py-4 items-center">
      <img src="/assets/logo.png" alt="" className="w-[13%]" />
      <div>
        <Button className="bg-[rgba(0, 0, 0, 0.46)] border border-white text-white ">
          RESUME
        </Button>
      </div>
    </div>
  );
};

export default HeroHeader;
