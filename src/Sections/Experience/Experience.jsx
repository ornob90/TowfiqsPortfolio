import React from "react";
import Container from "../../components/shared/Container";
import CountUp from "react-countup";

const Experience = () => {
  return (
    <div className=" bg-secondary my-28" id="experience">
      <Container className="flex flex-col gap-8 md:gap-0 md:flex-row justify-evenly items-center min-h-[200px] text-white py-8 md:py-0">
        <div className="flex flex-col  justify-center items-center h-full ">
          <p className=" font-generalBold text-6xl  lg:text-8xl">
            <CountUp end={41} duration={1} />+
          </p>
          <p className="font-semibold font-poppins text-gray-300">Projects</p>
        </div>
        <div className="flex flex-col justify-center items-center h-full ">
          <p className=" font-generalBold text-6xl  lg:text-8xl">
            <CountUp end={830} duration={2} />+
          </p>
          <p className="font-semibold font-poppins text-gray-300">
            Contribution
          </p>
        </div>
        <div className="flex flex-col justify-center items-center h-full ">
          <p className=" font-generalBold text-6xl  lg:text-8xl">
            <CountUp end={6} duration={3} />+
          </p>
          <p className="font-semibold font-poppins text-gray-300">
            months Experiene
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Experience;
