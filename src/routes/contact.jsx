import React from "react";
import Hero2 from "../components/Hero2";
import { Box, VStack, Link, Icon, Text } from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";
import { FaMobile } from "react-icons/fa";

const Contact = () => {
  return (
    <Box bgGradient="linear(to-br, #040013, #0a0220, #0f032d)" color="white" p={5}>
      <Hero2 heading1="Contact" heading2="Let's make connection ! " />
    </Box>
  );
};

export default Contact;