import {
  Alert,
  AlertIcon,
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  Img,
  Link,
  Grid,
  GridItem,
  AspectRatio,
  Avatar,
  HStack,
} from "@chakra-ui/react";
import PageLayout from "@/lib/components/PageLayout";
import { ReadMoreBtn } from "@/lib/components/shared";
import { motion } from "framer-motion";

const MotionImg = motion(Img);

const ProjectCard = (props: any) => {
  return (
    <GridItem as={Link} href="/" pos="relative">
      <AspectRatio ratio={16 / 10} w="100%" bgColor="white" borderRadius="15px" overflow="hidden">
        <MotionImg
          style={{ _hover: { cursor: "pointer " } }}
          initial={{
            filter: "blur(5px) brightness(60%)",
            scale: 1.05,
          }}
          whileHover={{ filter: "blur(0px) brightness(80%)", scale: 1.08 }}
          transition={{ type: "spring", stiffness: 300, damping: 50 }}
          src="https://raw.githubusercontent.com/adrianfinantyo/portofolio-post/main/maxima-2021/images/landing-page.jpg"
        />
      </AspectRatio>
      <HStack pos="absolute" bottom="2rem" left="2rem" zIndex={10} alignItems="center">
        <Avatar src={props.projectLogo} />
        <Text>MAXIMA 2021</Text>
      </HStack>
    </GridItem>
  );
};

const Home = () => {
  return (
    <PageLayout>
      {/* Profile Introduction */}
      <Flex
        flexDir={{ base: "column-reverse", lg: "row" }}
        justifyContent="center"
        alignItems="center"
        w="100%"
        minH="70vh"
      >
        <VStack
          mt={{ base: "2rem", lg: 0 }}
          flexDir="column"
          alignItems={{ base: "center", lg: "flex-start" }}
          spacing={{ base: "1rem", md: "2rem" }}
        >
          <Alert
            status="info"
            w={{ base: "100%", sm: "max-content" }}
            borderRadius="10px"
            fontSize={{ base: "xs", md: "md", xl: "lg" }}
          >
            <AlertIcon />
            Hi! I&aposm a frontend engineer based in Indonesia.
          </Alert>
          <Heading fontSize="4xl">Adrian Finantyo</Heading>
          <Text fontSize={{ base: "sm", md: "lg", xl: "xl" }}>
            Undergraduate Informatics Student at{" "}
            <Link href="https://umn.ac.id/" target="_blank">
              Universitas Multimedia Nusantara, Tangerang
            </Link>
          </Text>
        </VStack>
        <Box w={{ base: "280px", md: "300px", xl: "500px" }}>
          <Img w="100%" height="auto" src="/images/adrianfinantyo-profilepict.png" borderRadius="50px" />
        </Box>
      </Flex>
      {/* // Projects */}
      <Box mt="3rem">
        <Heading>Projects</Heading>
        <Grid py="1rem" mt="1rem" templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap="2rem">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </Grid>
        <ReadMoreBtn href="/projects">view all projects</ReadMoreBtn>
      </Box>
      {/* Post */}
      <Box mt="3rem">
        <Heading>Recent Posts</Heading>
        <VStack mt="1rem">
          <Link href="/">adawd</Link>
        </VStack>
        <ReadMoreBtn href="/post">view all posts</ReadMoreBtn>
      </Box>
    </PageLayout>
  );
};

export default Home;
