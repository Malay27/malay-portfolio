import React, { useEffect, useState } from "react";
import Hero1 from "../components/Hero1";
import { projectsList } from "../constant";
import { Link as RouterLink } from "react-router-dom";
import {
  Grid,
  Box,
  Image,
  Text,
  Heading,
  VStack,
  Divider,
} from "@chakra-ui/react";

const Home = () => {
  const [projectAll, setProjectAll] = useState([]);

  useEffect(() => {
    setProjectAll(projectsList);
  }, []);

  const wrapText = (str, maxLength) => {
    if (!str) return "";
    return str.length > maxLength ? str.substring(0, maxLength) + " ..." : str;
  };

  return (
    <VStack
      spacing={8}
      align="center"
      justify="center"
      bgGradient="linear(to-br, #040013, #0a0220, #0f032d)"
    >
      <Hero1 />
      <Box width="40%" alignSelf="center">
        <Divider
          borderColor="white"
          boxShadow="0 -10px 10px #0a0220, 0 10px 10px #FFFFFF"
        />
      </Box>
      <Heading as="h2" size="xl" color="white" mt={10}>
        Projects
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={6} mx={64} my={10}>
        {projectAll.map((project, index) => (
          <Box
          as={RouterLink}
          to={`/project`}
          key={project.id}
          bg="rgba(190, 190, 190, 0.2)"
          height="150px"
          gridColumn={index === 1 || index === 2 ? "span 2" : "span 1"}
          p={4}
          border="1px solid"
          borderColor="gray.200"
          borderRadius="md"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          _hover={{ transform: "scale(1.025)" }}
        >
          <project.icon color="white" size="2em" />
          <Heading
            as="h2"
            size="md"
            color="white"
            textAlign="center"
            fontFamily="Arial"
          >
            {project.title}
          </Heading>
        </Box>
        ))}
      </Grid>
    </VStack>
  );
};

export default Home;
