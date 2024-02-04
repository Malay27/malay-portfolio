import { Box, Heading } from "@chakra-ui/react";

const Hero2 = ({ heading1, heading2 }) => {
  return (
    <Box
      bgGradient="linear(to-br, #040013, #0a0220, #0f032d)"
      w="100%"
      p={32} // Increased padding
      color="white"
      textAlign="center"
    >
      <Heading
        as="h1"
        size="3xl"
        mb={5}
        sx={{
          background: "linear-gradient(to bottom right, white, gray)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {heading1}
      </Heading>
      <Heading
        as="h2"
        size="2xl"
        sx={{
          background: "linear-gradient(to bottom right, white, gray)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {heading2}
      </Heading>
    </Box>
  );
};

export default Hero2;
