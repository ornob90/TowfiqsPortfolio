import React from "react";
import Container from "../../components/shared/Container";
import SectionHeader from "../../components/shared/SectionHeader";
import CuisineShare from "./CuisineShare/CuisineShare";
import ShoeSphere from "./ShoeSphere/ShoeSphere";

const Projects = () => {
  return (
    <Container
      className=" w-[100%] bg-transparent min-h-[500px] "
      id="projects"
    >
      <SectionHeader name="PROJECTS" z={30} />
      <ShoeSphere />
      <CuisineShare />
    </Container>
  );
};

export default Projects;
