import React from "react";
import SectionHeader from "../../components/shared/SectionHeader";
import Container from "../../components/shared/Container";

const Contact = () => {
  return (
    <div className="min-h-[80vh] bg-black-dark">
      <Container>
        <SectionHeader name="CONTACT" />
        <p className="text-[#6F6F6F] text-[12px] mt-10">
          🤚 Hello, Let's get in touch
        </p>
        <div className="my-10">
          <p className=" text-[#6F6F6F] font-generalSemibold text-md">Name</p>
          <input
            type="text "
            className=" border-b border-[#343434] text-[#6F6F6F] text-sm caret-white focus:outline-none bg-transparent w-full md:w-3/5 lg:w-2/5 pt-3"
          />
        </div>
        <div className="my-10">
          <p className=" text-[#6F6F6F] font-generalSemibold text-md">Email</p>
          <input
            type="text "
            className=" border-b border-[#343434] text-[#6F6F6F] text-sm caret-white focus:outline-none bg-transparent w-full md:w-3/5 lg:w-2/5"
          />
        </div>
        <div className="my-10">
          <p className=" text-[#6F6F6F] font-generalSemibold text-md">
            Message
          </p>
          <input
            type="text "
            className=" border-b border-[#343434] text-[#6F6F6F] text-sm caret-white focus:outline-none bg-transparent w-full md:w-3/5 lg:w-2/5 mt-12"
          />
        </div>
        <button className="bg-[#FFFFFF] text-[#000000] border border-black px-8 py-2 mb-4 text-sm active:scale-95 duration-[.4s] font-generalSemibold">
          SEND
        </button>
      </Container>
    </div>
  );
};

export default Contact;
