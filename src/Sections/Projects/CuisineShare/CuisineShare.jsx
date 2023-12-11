import React from "react";
import Container from "../../../components/shared/Container";
import Button from "../../../components/shared/Button";
import ProjectTitle from "../../../components/shared/ProjectTitle";
import Tech from "../../../components/shared/Tech";
import { cuisineShareSkills } from "../../Skills/skillsList";

const CuisineShare = () => {
  return (
    <div className="mt-20 mb-5 font-poppins dark:text-white">
      <ProjectTitle title="Recipe Sharing Website" />

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <div className=" lg:w-[90%] mb-8 lg:mb-0 p-2 bg-yellow-100 h-max rounded-md">
            <img
              className="w-full h-[90%] object-cover  rounded-md"
              src="./cuisine/home.png"
              alt=""
            />
          </div>
          <Tech skills={cuisineShareSkills} index={1} />
        </div>
        <div className="">
          <h1 className=" font-generalBold text-2xl mb-4">
            CUISINE <span className="text-[#FACC15]">SHARE</span>
          </h1>
          {/* Description  */}
          <p className="text-sm md:text-base">
            A <span className="font-bold">Full Stack</span> Recipe Sharing
            website With <span className="font-bold">Dynamic</span> Behavior
            where you can share and explore recipes, built using{" "}
            <span className="font-bold">React, Tailwind, and Firebase</span> – a
            tasty journey online.
          </p>

          {/* Features  */}
          <div className="mt-8 flex flex-col gap-4  font-generalSemibold text-[10px] md:text-[12px] lg:text-base">
            <div className="grid grid-cols-2 list-outside">
              <li className="list-inside">Authentication</li>
              <li className="">Real Time Chat System</li>
            </div>
            <div className="grid grid-cols-2 list-outside">
              <li>Dynamic User Profile</li>
              <li>Recipe Uploading System</li>
            </div>
            <div className="grid grid-cols-2 list-outside">
              <li>News Feed</li>
              <li>Drop a Review With Rating</li>
            </div>
            <div className="grid grid-cols-2 list-outside">
              <li>Recipe Bookmarks</li>
              <li>Fully Responsive</li>
            </div>
          </div>

          <div className="mt-14 flex gap-4">
            <Button className="text-sm md:text-base border border-black dark:border-white text-black dark:text-white py-2 px-7">
              Code
            </Button>
            <Button className="text-sm md:text-base bg-black text-[#FACC15] py-2 px-8">
              Live
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-16">
        <div className="p-2 bg-yellow-200 rounded-md h-max">
          <img className="rounded-md" src="./cuisine/newspeed.png" alt="" />
        </div>
        <div className="p-2 bg-yellow-200 rounded-md h-max">
          <img className="rounded-md" src="./cuisine/profile.png" alt="" />
        </div>
        <div className="p-2 bg-yellow-200 rounded-md h-max">
          <img className="rounded-md" src="./cuisine/favorite.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default CuisineShare;
