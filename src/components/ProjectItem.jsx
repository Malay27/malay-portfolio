import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Heading,
  Text,
  List,
  ListItem,
  HStack,
  Button,
} from "@chakra-ui/react";

const ProjectItem = ({ project }) => {
  const { title, duration, discription, tech_stack, projectLinks } = project;
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      w="100%"
      h="auto"
      bg="rgba(255, 255, 255, 0.1)"
      _hover={{
        bgGradient: "linear(to-r, gray.900, blue.200)",
      }}
    >
      <Box p="2">
        <Heading as="h2" size="xl" color="white">
          {title}
        </Heading>
        <Text color="white">{duration}</Text>
      </Box>
      <Box p="2" fontSize="sm">
        <List spacing={3}>
          {discription.map((dis, index) => (
            <ListItem key={dis + index} color="white">
              {"• " + dis}
            </ListItem>
          ))}
        </List>
      </Box>
      <Box p="2">
        <HStack spacing={2}>
          {Object.entries(projectLinks).map(([key, value], index) => (
            <Button
              as="a"
              href={value}
              bg="purple.500"
              color="black"
              key={index}
            >
              {key}
            </Button>
          ))}
        </HStack>
      </Box>
    </Box>
  );
};

export default ProjectItem;
