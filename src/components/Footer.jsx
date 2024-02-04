import React from "react";
import { MdEmail } from "react-icons/md";
import { FaMobile } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaReddit,
  FaTwitter,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Box, Flex, Text, Link, Icon } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      justify="space-between"
      p={4}
      bgGradient="linear(to-br, #040013, #0a0220, #0f032d)"
      color="white"
    >
      <Box mt={10} ml={10} p={4} borderRadius="md" boxShadow="md">
        <Link href="mailto:malayjiyani111@gmail.com" color="white">
          <Icon as={MdEmail} color="blue.500" mr={2}/> malayjiyani111@gmail.com
        </Link>
        <Text color="white">
          <Icon as={FaMobile} color="green.500" mr={2}/> 9510696046
        </Text>
        <Text color="white">
          <Icon as={FaLocationDot} color="red.500" mr={2}/> Amreli Gujarat India
        </Text>
      </Box>
      <Box mt={20} mr={10}>
        <Flex>
          <Link
            href="https://www.linkedin.com/in/malayjiyani"
            isExternal
            mr={5}
          >
            <Icon as={FaLinkedin} />
          </Link>
          <Link href="https://www.github.com/Malay27" isExternal mr={5}>
            <Icon as={FaGithub} />
          </Link>
          <Link href="https://twitter.com/MalayJiyani" isExternal mr={5}>
            <Icon as={FaTwitter} />
          </Link>
          <Link
            href="https://www.reddit.com/user/reva_de_ne111"
            isExternal
            mr={5}
          >
            <Icon as={FaReddit} />
          </Link>
          <Link
            href="https://www.instagram.com/malay.jiyani/"
            isExternal
            mr={5}
          >
            <Icon as={FaInstagram} />
          </Link>
          <Link href="https://leetcode.com/20bce111/" isExternal>
            <Icon as={SiLeetcode} />
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
};
export default Footer;
