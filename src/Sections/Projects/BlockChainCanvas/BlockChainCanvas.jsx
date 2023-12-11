import React from "react";
import Tech from "../../../components/shared/Tech";
import Button from "../../../components/shared/Button";
import ProjectTitle from "../../../components/shared/ProjectTitle";
import { blockChainSkills, cuisineShareSkills } from "../../Skills/skillsList";
import SpanBold from "../../../components/shared/SpanBold";

const BlockChainCanvas = () => {
  return (
    <div className="mt-20 mb-5  font-poppins dark:text-white">
      <ProjectTitle title="Recipe Sharing Website" />

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="">
          <h1 className=" font-generalBold text-2xl mb-4">
            BlockChain <span className="text-[#64208b]">Canvas</span>
          </h1>
          {/* Description  */}
          <p className="text-sm md:text-base">
            A <SpanBold>Front end</SpanBold> react website using React and
            Tailwind. It provides live prices of crypto coins and nfts. The data
            is collection from <SpanBold>coingecko API</SpanBold>.
          </p>

          {/* Features  */}
          <div className="mt-8 flex flex-col gap-4  font-generalSemibold text-[10px] md:text-[12px] lg:text-base">
            <div className="grid grid-cols-2 list-outside">
              <li className="list-inside">Live Coins Prices</li>
              <li className="">Details Information </li>
            </div>
            <div className="grid grid-cols-2 list-outside">
              <li>Responsive Design</li>
              <li>Modern UI</li>
            </div>
          </div>
          <Tech skills={blockChainSkills} index={0} />

          <div className="mt-14 flex gap-4">
            <Button className="text-sm md:text-base border border-black dark:border-white text-black dark:text-white py-2 px-7">
              Code
            </Button>
            <Button className="text-sm md:text-base bg-gradient-to-r from-[#060109] to-[#180025]  text-white py-2 px-8">
              Live
            </Button>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className=" lg:w-[90%] mb-8 lg:mb-0  h-max rounded-md ">
            <img
              className="w-full h-full object-cover  rounded-md"
              src="./blockchain/home.PNG"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-16">
        <div className=" rounded-md h-max">
          <img className="rounded-md" src="./blockchain/table.png" alt="" />
        </div>
        <div className=" rounded-md h-max">
          <img className="rounded-md" src="./blockchain/trending.PNG" alt="" />
        </div>
        <div className=" rounded-md h-max">
          <img className="rounded-md" src="./blockchain/creator.PNG" alt="" />
        </div>
      </div>
    </div>
  );
};

export default BlockChainCanvas;
