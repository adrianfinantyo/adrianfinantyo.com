import {
  Alert,
  AlertIcon,
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  Img,
  Link as ChakraLink,
  Grid,
  GridItem,
  AspectRatio,
  Avatar,
  HStack,
  Icon,
} from "@chakra-ui/react";
import PageLayout from "@/lib/components/PageLayout";
import { ReadMoreBtn } from "@/lib/components/shared";
import { motion } from "framer-motion";
import Link from "next/link";
import { allPosts, allProjects } from "contentlayer/generated";
import moment from "moment";
import { transition } from "../constants/anim";
import { IoCodeSlash } from "react-icons/io5";

const MotionImg = motion(Img);
const MotionLink = motion(Link);

const ProjectCard = (props: any) => {
  return (
    <GridItem as={Link} href={`/project/${props.slug}`} pos="relative" borderRadius="15px" overflow="hidden">
      <AspectRatio ratio={16 / 10} w="100%" bgColor="white">
        <MotionImg
          _hover={{ cursor: "pointer" }}
          initial={{
            filter: "blur(5px) brightness(60%)",
            scale: 1.05,
          }}
          whileHover={{ filter: "blur(0px) brightness(80%)", scale: 1.08 }}
          transition={transition.defaultSpring}
          src={props.cover}
        />
      </AspectRatio>
      <HStack pos="absolute" bottom="2rem" left="2rem" zIndex={10} alignItems="center" color="white">
        <Avatar src={props.logo} />
        <Text>{props.name}</Text>
      </HStack>
    </GridItem>
  );
};

const RecentPostCard = (props: any) => {
  return (
    <MotionLink
      whileHover={{
        x: 10,
      }}
      transition={transition.defaultSpring}
      href={`/post/${props.slug}`}
      style={{ width: "100%" }}
    >
      <VStack alignItems="flex-start" color="initial">
        <Heading size="lg">{props.title}</Heading>
        <Text>
          {moment(props.date).format("MMM DD, YYYY")} - {props.readTime.text}
        </Text>
      </VStack>
    </MotionLink>
  );
};

const Home = () => {
  console.log(allProjects);
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
          textAlign={{ base: "center", lg: "left" }}
        >
          <Alert
            w={{ base: "100%", sm: "max-content" }}
            borderRadius="10px"
            fontSize={{ base: "xs", md: "md", xl: "lg" }}
          >
            👋 Hi! I&apos;m a Software Engineer based in Indonesia.
          </Alert>
          <Heading fontSize={{ base: "2xl", md: "3xl", xl: "5xl" }}>Adrian Finantyo</Heading>
          <Text fontSize={{ base: "sm", md: "lg", xl: "xl" }}>
            Undergraduate Informatics Student at{" "}
            <ChakraLink href="https://umn.ac.id/" target="_blank">
              Universitas Multimedia Nusantara, Tangerang
            </ChakraLink>
          </Text>
        </VStack>
        <Box w={{ base: "280px", md: "300px", xl: "500px" }}>
          <Img w="100%" height="auto" src="/images/adrianfinantyo-profilepict.png" borderRadius="50px" />
        </Box>
      </Flex>
      {/* // Projects */}
      <Box mt="3rem">
        <Heading>Projects</Heading>
        <Grid py="1rem" my="1rem" templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap="2rem">
          {allProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </Grid>
        <ReadMoreBtn href="/project">view all projects</ReadMoreBtn>
      </Box>
      {/* Post */}
      <Box mt="3rem">
        <Heading>Recent Posts</Heading>
        <VStack my="1rem" py="1rem" spacing="2rem">
          {allPosts.map((post) => (
            <RecentPostCard key={post.id} {...post} />
          ))}
        </VStack>
        <ReadMoreBtn href="/post">view all posts</ReadMoreBtn>
      </Box>
    </PageLayout>
  );
};

export default Home;
