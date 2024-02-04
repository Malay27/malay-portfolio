import React from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  VStack,
  Center,
  Button,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import profile_pic from "../assets/images/profile-pic.png";
import Hero2 from "../components/Hero2";

const About = () => {
  return (
    <Center>
      <Box
        bgGradient="linear(to-br, #040013, #0a0220, #0f032d)"
        color="white"
        p={5}
        w="100%"
      >
        <Hero2 heading1="Abouts" heading2="I am friendly Front-End Developer" />
        <VStack spacing={5} align="center" mt={20}>
          <Image
            borderRadius="full"
            boxSize="250px"
            src={profile_pic}
            alt="Profile Picture"
            boxShadow="0px 0px 30px 5px rgba(0, 0, 0, 0.2)"
            border="2px"
            borderColor="purple.500"
            transition="transform 0.2s"
            _hover={{ transform: "scale(1.2)" }}
          />
          <Heading as="h2" size="xl">
            Who am I?
          </Heading>
          <Text>
            Malay is a Passionate Computer Science Student with a huge love for
            Java, JavaScript, DSA.
          </Text>
          <Text>Malay love to travel 🏕️ and watch a movies 🎥.</Text>
          <Text>Malay love to watch Anime ⛩️</Text>
          <Button as={RouterLink} to="/contact" colorScheme="purple">
            Contact
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default About;
