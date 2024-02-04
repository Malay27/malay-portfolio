import React, { useState } from "react";
import Hero2 from "../components/Hero2";
import { projectsList } from "../constant";
import ProjectItem from "../components/ProjectItem";
import { Box, SimpleGrid, Container } from "@chakra-ui/react";

const Project = () => {
  const [projectAll, setProjectAll] = useState(projectsList);
  return (
    <Box bgGradient="linear(to-br, #040013, #0a0220, #0f032d)">
      <Hero2 heading1="Projects" heading2="Some of my recent work" />
      <Container maxW="container.xl" py={10}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {projectAll.map((project) => (
            <ProjectItem key={project.title} project={project} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Project;