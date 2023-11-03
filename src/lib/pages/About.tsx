import { Flex, VStack, Heading, Img, Text, HStack, Link as ChakraLink } from "@chakra-ui/react";
import PageLayout from "../components/PageLayout";
import { NavLink } from "../components/shared";
import { social } from "../constants/link";
import styles from "@/styles/About.module.css";

const About: React.FC = () => {
  return (
    <PageLayout>
      <Flex
        flexDir={{ base: "column-reverse", lg: "row" }}
        justifyContent="center"
        alignItems="center"
        w="100%"
        minH="70vh"
        gap={{ base: "1rem", xl: "2rem" }}
      >
        <Heading
          textAlign={{ base: "center", lg: "left" }}
          fontSize={{ base: "4xl", md: "6xl", "2xl": "7xl" }}
          fontWeight="extrabold"
          className={styles.gradientText}
        >
          Solve The Problem, Write The Solution.
        </Heading>
        <Img
          w={{ base: "280px", md: "300px", lg: "250px", "2xl": "350px" }}
          src="https://storage.googleapis.com/adrian-dicoding-portofolio/images/adrianfinantyo-profilepict.png"
          borderRadius="50%"
        />
      </Flex>
      <VStack alignItems="flex-start" spacing="2rem">
        <Heading>About</Heading>
        <Text fontSize={{ base: "lg", md: "xl" }}>
          I&apos;m Adrian Finantyo, currently working as Software engineer with focus on web and mobile development.
          Proficient in both frontend and backend development using MERN Stack, Ionic Capacitor, Cloud Computing with
          Digital Ocean, and Firebase. Keen to learn, excellent with time management, problem solving skill, work
          collaboratively, and consistently meet deadlines. Strong engineering professional with bachelor&apos;s degree
          focusing on Informatics from{" "}
          <ChakraLink isExternal href="https://umn.ac.id/">
            Universitas Multimedia Nusantara
          </ChakraLink>
          .
        </Text>
        <HStack>
          {social.map((item) => (
            <NavLink isExternal iconSize={8} key={item.href} {...item} />
          ))}
        </HStack>
      </VStack>
    </PageLayout>
  );
};

export default About;
