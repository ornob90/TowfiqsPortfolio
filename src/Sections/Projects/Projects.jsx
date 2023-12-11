import React from "react";
import Container from "../../components/shared/Container";
import SectionHeader from "../../components/shared/SectionHeader";
import CuisineShare from "./CuisineShare/CuisineShare";
import ShoeSphere from "./ShoeSphere/ShoeSphere";
import BlockChainCanvas from "./BlockChainCanvas/BlockChainCanvas";

const Projects = () => {
  return (
    <Container
      className=" w-[100%] bg-transparent min-h-[500px] "
      id="projects"
    >
      <SectionHeader name="PROJECTS" z={30} />
      <ShoeSphere />
      <CuisineShare />
      <BlockChainCanvas />
    </Container>
  );
};

export default Projects;
