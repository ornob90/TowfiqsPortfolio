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
import Button from "../../components/shared/Button";

const AboutMD = () => {
  return (
    <Container className="lg:hidden">
      <SectionHeader name="ABOUT" />
      <div className="min-h-[400px] grid grid-cols-1 md:grid-cols-8 md:grid-rows-10 mb-12 gap-2">
        {/* image cell */}
        <div className="h-[300px]  md:h-auto -order-1 md:order-0 image-md hidden md:block">
          <img
            src="./assets/myPic.png"
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="h-[300px]  md:h-auto -order-1 md:order-0  md:hidden">
          <img
            src="./assets/myPic.png"
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* about cell */}
        <div className="hidden md:block -order-2 md:order-1 border border-black  about-md bg-black-dark text-white px-3 pt-3 rounded-lg">
          <div className="flex justify-between mb-6">
            <h2 className="text-2xl font-generalBold">I'M TOWFIQ</h2>
            <FaArrowRightFromBracket className="text-2xl " />
          </div>
          <p className="font-generalLight text-sm lg:text-base p-1">
            “Emerging <SpanBold> web developer</SpanBold> with{" "}
            <SpanBold> good fundamentals</SpanBold>, turning design into
            <SpanBold> user-friendly websites</SpanBold>. Committed to
            delivering
            <SpanBold> visually appealing</SpanBold> solutions. Eager to apply
            skills, <SpanBold> collaborate</SpanBold>, and create exceptional
            online experiences.”
          </p>
        </div>

        {/* about cell */}
        <div className="md:hidden -order-2 md:order-1 border border-black  bg-black-dark text-white px-3 pt-3 rounded-lg">
          <div className="flex justify-between mb-6">
            <h2 className="text-2xl font-generalBold">I'M TOWFIQ</h2>
            <FaArrowRightFromBracket className="text-2xl " />
          </div>
          <p className="font-generalLight text-sm lg:text-base p-1">
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
        <div className="order-6 border border-black  project-md bg-black-gray text-white rounded-lg p-3 hidden md:block">
          <div className="h-max flex flex-col gap-2">
            <h2 className="text-2xl font-generalBold">PROJECTS</h2>
            <p className="text-light-gray text-[12px] font-generalBold">
              Unveil My Creative Projects Below
            </p>
          </div>
          <div className="flex flex-col items-end mt-12 justify-between h-[60%]">
            <div className="border border-[rgba(217, 217, 217, 0.47)] w-full p-2 font-generalSemiBold rounded-md bg-[#2D2D2D] shadow-lg">
              <p>Cuisine Share</p>
              <div className="flex gap-4 mt-4 items-center">
                <img src="./assets/icons/html-sm-sm.png" alt="" />

                <img src="./assets/icons/tailwind-sm-sm.png" alt="" />

                <img src="./assets/icons/react-sm-sm.png" alt="" />

                <img src="./assets/icons/firebase-sm-sm.png" alt="" />
              </div>
              <div className="flex justify-end mt-2">
                <p className="bg-white w-[20px] h-[20px] rounded-full"></p>
              </div>
            </div>
            <div className="bg-dark pt-2 lg:pt-0">
              <Button className="flex items-center gap-2 bg-black-dark rounded-lg py-2 px-4 text-sm">
                More <FaArrowRightFromBracket />
              </Button>
            </div>
          </div>
        </div>

        {/* skill cell */}
        <div className=" -order-1 md:order-3 border border-black  skills-md p-3 bg-black-gray text-white rounded-lg  flex-col justify-between hidden md:flex">
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
        <div className=" -order-1 md:order-4 border border-black  social-md bg-black-dark text-white p-3  justify-between flex-col rounded-lg hidden md:flex ">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-generalBold">SOCIAL</h2>
            <p className="text-light-gray text-[12px] font-generalBold">
              Explore My Online Presence and Connect with Me on Social Platforms
            </p>
          </div>
          <div className="flex gap-2 items-center pt-2 lg:pt-0">
            <div className=" bg-white text-3xl lg:text-5xl text-black rounded-md p-1">
              <FaGithub />
            </div>
            <div className=" text-lg lg:text-4xl rounded-md p-3 bg-black text-white">
              <SlSocialLinkedin />
            </div>
            <div className=" bg-white text-3xl lg:text-5xl text-black rounded-md p-1">
              <BiLogoFacebookCircle />
            </div>
          </div>
        </div>

        <div className=" -order-1 md:order-4 border border-black  bg-black-dark text-white p-3  justify-between flex-col rounded-lg flex md:hidden ">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-generalBold">SOCIAL</h2>
            <p className="text-light-gray text-[12px] font-generalBold">
              Explore My Online Presence and Connect with Me on Social Platforms
            </p>
          </div>
          <div className="flex gap-2 items-center pt-2 lg:pt-0">
            <div className=" bg-white text-3xl lg:text-5xl text-black rounded-md p-1">
              <FaGithub />
            </div>
            <div className=" text-lg lg:text-4xl rounded-md p-3 bg-black text-white">
              <SlSocialLinkedin />
            </div>
            <div className=" bg-white text-3xl lg:text-5xl text-black rounded-md p-1">
              <BiLogoFacebookCircle />
            </div>
          </div>
        </div>

        {/* resume cell */}
        <div className="order-5 border border-black  resume-md font-generalBold  justify-between flex-col p-2 bg-black-dark rounded-lg text-white hidden md:flex">
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
        <div className="order-6 border border-black  contact-md bg-black-gray text-white p-3 rounded-lg  flex-col justify-between lg:block hidden md:flex">
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

export default AboutMD;
