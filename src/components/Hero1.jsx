import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Heading, Link, VStack } from "@chakra-ui/react";

const Hero1 = () => {
  return (
    <VStack
      spacing={8}
      align="center"
      justify="center"
      height="100vh"
      zIndex={1}
    >
      <Heading
        as="h2"
        size="2xl"
        sx={{
          background: "linear-gradient(to bottom right, white, gray)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Hi' I am Malay Jiyani
        <span style={{ WebkitTextFillColor: "initial" }}>👋</span>
      </Heading>
      <Heading
        as="h1"
        size="xl"
        sx={{
          background: "linear-gradient(to bottom right, white, gray)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Front-End Developer.
      </Heading>
      <Box>
        <Link
          as={RouterLink}
          to="/project"
          px={4}
          py={2}
          bg="purple.500"
          color="white"
          borderRadius="md"
          marginRight={2}
          textDecoration="none" // Add this to remove the underline
          _hover={{ bg: "purple.600" }}
        >
          Projects
        </Link>
        <Link
          as={RouterLink}
          to="/contact"
          px={4}
          py={2}
          bg="purple.500"
          color="white"
          borderRadius="md"
          textDecoration="none" // Add this to remove the underline
          _hover={{ bg: "purple.600" }}
        >
          Contact
        </Link>
      </Box>
    </VStack>
  );
};

export default Hero1;
