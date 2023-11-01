import React from "react";
import Container from "../../components/shared/Container";
import SectionHeader from "../../components/shared/SectionHeader";
import skillsList from "./skillsList";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="bg-[#D9D9D9] relative -z-20  min-h-screen" id="skills">
      <Container className="py-1">
        <SectionHeader name="SKILLS" />

        <div className="w-[90%] relative  mx-auto py-12  flex flex-wrap items-center justify-center gap-8 lg:gap-x-0 lg:gap-y-5 ">
          {skillsList.map(({ id, name, path }, idx) => (
            <div
              key={id}
              className="w-[25%] lg:w-[20%] flex flex-col justify-center items-center gap-2"
            >
              <img src={path} alt="" className="w-[40%] md:w-[50%] lg:w-auto" />
              <p
                className={`text-sm md:text-md lg:text-xl font-generalBold  ${
                  idx === 3 || idx === 4 || idx === 7 || idx === 8
                    ? "lg:text-white"
                    : ""
                }`}
              >
                {name.toUpperCase()}
              </p>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "46%" }}
          transition={{ duration: 0.6 }}
          className="absolute top-0 right-0 h-full bg-secondary -z-10 hidden lg:block overflow-hidden"
        ></motion.div>
      </Container>
    </div>
  );
};

export default Skills;
