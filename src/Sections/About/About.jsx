import React from "react";
import Container from "../../components/shared/Container";
import SectionHeader from "../../components/shared/SectionHeader";
import {
  FaArrowRightFromBracket,
  FaLocationDot,
  FaGithub,
} from "react-icons/fa6";
import SpanBold from "../../components/shared/SpanBold";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { AiFillPhone } from "react-icons/ai";
import { SlSocialLinkedin } from "react-icons/sl";

const About = () => {
  return (
    <Container>
      <SectionHeader name="ABOUT" />
      <div className="min-h-[400px] grid grid-cols-8 grid-rows-10 grid-flow-row-dense mb-12 gap-2">
        {/* image cell */}
        <div className=" col-span-2 row-span-8 image">
          <img
            src="./assets/myPic.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* about cell */}
        <div className="border border-black col-span-4 row-span-4 about bg-black-dark text-white px-3 pt-3 rounded-lg">
          <div className="flex justify-between mb-6">
            <h2 className="text-2xl font-generalBold">I'M TOWFIQ</h2>
            <FaArrowRightFromBracket className="text-2xl " />
          </div>
          <p className="font-generalLight">
            “Emerging <SpanBold> web developer</SpanBold> with{" "}
            <SpanBold> good fundamentals</SpanBold>, turning design into
            <SpanBold> user-friendly websites</SpanBold>. Committed to
            delivering
            <SpanBold> visually appealing</SpanBold> solutions. Eager to apply
            skills, <SpanBold> collaborate</SpanBold>, and create exceptional
            online experiences.”
          </p>
        </div>

        {/* project cell */}
        <div className="border border-black col-span-2 row-span-6 project bg-black-gray text-white rounded-lg p-3">
          <h2 className="text-2xl font-generalBold">PROJECTS</h2>
        </div>

        {/* skill cell */}
        <div className="border border-black col-span-4 row-span-4 skills p-3 bg-black-gray text-white rounded-lg flex flex-col justify-between ">
          <div className="flex justify-between mb-6">
            <h2 className="text-2xl font-generalBold">SKILLS</h2>
            <FaArrowRightFromBracket className="text-2xl " />
          </div>
          <div className="flex justify-between w-[95%] items-end">
            <img src="./assets/icons/js-sm.png" alt="" className="w-[7%]" />
            <img
              src="./assets/icons/firebase-sm.png"
              alt=""
              className="w-[9%]"
            />
            <img src="./assets/icons/react-sm.png" alt="" className="w-[8%]" />
            <img src="./assets/icons/node-sm.png" alt="" className="w-[8%]" />
            <img src="./assets/icons/mongo-sm.png" alt="" className="w-[8%]" />

            <p className="font-generalBold   text-3xl">. . .</p>
          </div>
        </div>

        {/* social cell */}
        <div className="border border-black col-span-2 row-span-4 social bg-black-dark text-white p-3  flex justify-between flex-col rounded-lg">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-generalBold">SOCIAL</h2>
            <p className="text-light-gray text-[12px] font-generalBold">
              Explore My Online Presence and Connect with Me on Social Platforms
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <div className=" bg-white text-5xl text-black rounded-md p-1">
              <FaGithub />
            </div>
            <div className=" text-4xl rounded-md p-3 bg-black text-white">
              <SlSocialLinkedin />
            </div>
            <div className=" bg-white text-5xl text-black rounded-md p-1">
              <BiLogoFacebookCircle />
            </div>
          </div>
        </div>

        {/* resume cell */}
        <div className="border border-black col-span-2 row-span-2 resume font-generalBold flex justify-between flex-col p-2 bg-black-dark rounded-lg text-white">
          <BsFillPersonLinesFill className="text-2xl" />
          <p className="text-light-gray text-[12px]"> LEARN MORE ABOUT ME</p>
          <div className="flex justify-between items-center">
            <h2 className="text-xl">
              SEE MY <span className="text-secondary">RESUME</span>
            </h2>

            <FaArrowRightFromBracket className="text-2xl " />
          </div>
        </div>

        {/* contact cell */}
        <div className="border border-black col-span-4 row-span-2 contact bg-black-gray text-white p-3 rounded-lg">
          <h2 className="text-2xl font-generalBold pb-4">GET IN TOUCH</h2>
          <div className="flex justify-between items-center text-xl">
            <div className="flex gap-2 items-center">
              <div className="bg-black p-1 rounded-full">
                <FaLocationDot className="" />
              </div>
              <div className="bg-black p-1 rounded-full">
                <AiFillPhone className="" />
              </div>
            </div>
            <FaArrowRightFromBracket className="text-2xl " />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
