import React from "react";
import Container from "../../components/shared/Container";
import SectionHeader from "../../components/shared/SectionHeader";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import SpanBold from "../../components/shared/SpanBold";

const About = () => {
  return (
    <Container>
      <SectionHeader name="ABOUT" />
      <div className="min-h-[400px] grid grid-cols-8 grid-rows-10 grid-flow-row-dense mb-12 gap-1">
        {/* image cell */}
        <div className="border border-black col-span-2 row-span-8 image">
          Image
        </div>

        {/* about cell */}
        <div className="border border-black col-span-4 row-span-4 about bg-black-dark text-white px-4 pt-4 rounded-lg">
          <div className="flex justify-between mb-6">
            <h1 className="text-3xl font-generalBold">I’m Towfiq</h1>
            <FaArrowRightFromBracket />
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
        <div className="border border-black col-span-2 row-span-6 project">
          Project
        </div>

        {/* skill cell */}
        <div className="border border-black col-span-4 row-span-4 skills">
          Skill
        </div>

        {/* social cell */}
        <div className="border border-black col-span-2 row-span-4 social">
          Social
        </div>

        {/* resume cell */}
        <div className="border border-black col-span-2 row-span-2 resume">
          Resume
        </div>

        {/* contact cell */}
        <div className="border border-black col-span-4 row-span-2 contact">
          Contact
        </div>
      </div>
    </Container>
  );
};

export default About;
