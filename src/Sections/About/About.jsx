import React from "react";
import Container from "../../components/shared/Container";
import SectionHeader from "../../components/shared/SectionHeader";

const About = () => {
  return (
    <Container>
      <SectionHeader name="ABOUT" />
      <div className="min-h-[400px] grid grid-cols-8 grid-rows-10 grid-flow-row-dense mb-12">
        {/* image cell */}
        <div className="border border-black col-span-2 row-span-8 image">
          Image
        </div>

        {/* about cell */}
        <div className="border border-black col-span-4 row-span-4 about">
          About
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
