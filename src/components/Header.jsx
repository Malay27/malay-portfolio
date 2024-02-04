import React from "react";
import { Box, Flex, Spacer, Link as ChakraLink, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box as="header" bg="transparent" w="100%" p={4} position="fixed" zIndex={1}>
      <Flex align="center" justify="space-between">
        <ChakraLink as={Link} to="/" _hover={{ textDecoration: 'none' }}>
          <Text fontSize="2xl" fontWeight="bold" color="white">Portfolio</Text>
        </ChakraLink>
        <Flex>
          <Box p="2">
            <ChakraLink as={Link} to="/" _hover={{ textDecoration: "none" }}>
              <Text color="white" fontSize="xl" _hover={{ color: "blue.500" }}>
                Home
              </Text>
            </ChakraLink>
          </Box>
          <Spacer />
          <Box p="2">
            <ChakraLink as={Link} to="/project" _hover={{ textDecoration: "none" }}>
              <Text color="white" fontSize="xl" _hover={{ color: "blue.500" }}>
                Project
              </Text>
            </ChakraLink>
          </Box>
          <Spacer />
          <Box p="2">
            <ChakraLink as={Link} to="/about" _hover={{ textDecoration: "none" }}>
              <Text color="white" fontSize="xl" _hover={{ color: "blue.500" }}>
                About me
              </Text>
            </ChakraLink>
          </Box>
          <Spacer />
          <Box p="2">
            <ChakraLink as={Link} to="/contact" _hover={{ textDecoration: "none" }}>
              <Text color="white" fontSize="xl" _hover={{ color: "blue.500" }}>
                Contact me
              </Text>
            </ChakraLink>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;