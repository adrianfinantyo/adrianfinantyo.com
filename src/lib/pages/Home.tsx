import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  Img,
  Grid,
  GridItem,
  AspectRatio,
  Avatar,
  HStack,
  Hide,
  Skeleton,
} from "@chakra-ui/react";
import PageLayout from "@/lib/components/PageLayout";
import { ReadMoreBtn } from "@/lib/components/shared";
import { motion } from "framer-motion";
import Link from "next/link";
import { allPosts, allProjects } from "@/lib/utils/content";
import moment from "moment";
import { transition } from "../constants/anim";
import Lottie from "lottie-react";
import typeCode from "@/lib/assets/lottie/code-typing.json";

const MotionImg = motion(Img);
const MotionLink = motion(Link);

const animImgCard = {
  initial: {
    filter: "blur(0px) brightness(80%)",
    scale: 1.1,
  },
  hover: {
    filter: "blur(8px) brightness(60%)",
    scale: 1.05,
  },
};

const animTextCard = {
  initial: {
    opacity: 0,
    y: "150%",
  },
  hover: {
    opacity: 100,
    y: 0,
  },
};

const ProjectCard = (props: any) => {
  return (
    <GridItem
      as={MotionLink}
      whileHover="hover"
      initial="initial"
      href={`/project/${props.slug}`}
      pos="relative"
      overflow="hidden"
    >
      <AspectRatio ratio={16 / 10} w="100%" bgColor="white" borderRadius="15px" overflow="hidden">
        <MotionImg
          _hover={{ cursor: "pointer" }}
          variants={animImgCard}
          src={props.cover}
          transition={transition.defaultSpring}
        />
      </AspectRatio>
      <motion.span
        variants={animTextCard}
        transition={transition.defaultSpring}
        style={{ position: "absolute", bottom: "2rem", zIndex: 10, padding: "0 2rem" }}
      >
        <HStack alignItems="center" color="white" spacing="1rem">
          <Avatar src={props.logo} />
          <VStack alignItems="flex-start">
            <Heading fontSize={{ md: "lg", xl: "2xl" }}>{props.name}</Heading>
            <Text noOfLines={2}>{props.title}</Text>
          </VStack>
        </HStack>
      </motion.span>

      <Hide above="md">
        <HStack alignItems="center" color="white" spacing="1rem" mt="1rem">
          <VStack alignItems="flex-start">
            <Heading fontSize={{ base: "xl", sm: "3xl" }}>{props.name}</Heading>
            <Text>{props.title}</Text>
          </VStack>
        </HStack>
      </Hide>
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
  return (
    <PageLayout>
      {/* Profile Introduction */}
      <Flex
        flexDir={{ base: "column-reverse", lg: "row" }}
        justifyContent="center"
        alignItems="center"
        w="100%"
        minH="70vh"
        gap={{ base: 0, lg: "2rem" }}
      >
        <VStack
          mt={{ base: "2rem", lg: 0 }}
          flexDir="column"
          alignItems={{ base: "center", lg: "flex-start" }}
          spacing={{ base: "1rem", md: "2rem" }}
          textAlign={{ base: "center", lg: "left" }}
        >
          <Link href="/about">
            <Heading fontSize={{ base: "2xl", md: "4xl", "2xl": "6xl" }}>Bonifasius Ariesto Adrian Finantyo</Heading>
          </Link>
          <Text fontSize={{ base: "md", md: "lg", xl: "xl", "2xl": "2xl" }}>
            👋 Hi! I&apos;m a Software Engineer based in Indonesia.
          </Text>
        </VStack>
        {/* <Img
          w={{ base: "280px", md: "300px", lg: "250px", "2xl": "350px" }}
          src="/images/adrianfinantyo-profilepict.png"
          borderRadius="50px"
        /> */}
        <Img
          as={Lottie}
          animationData={typeCode}
          loop={true}
          w={{ base: "250px", md: "500px", lg: "400px", "2xl": "800px" }}
          src="/images/adrianfinantyo-profilepict.png"
        />
      </Flex>
      {/* // Projects */}
      <Box mt="3rem">
        <Heading>Projects</Heading>
        <Grid py="1rem" my="1rem" templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap="2rem">
          {allProjects.slice(0, 4).map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </Grid>
        <ReadMoreBtn href="/project">view all projects</ReadMoreBtn>
      </Box>
      {/* Post */}
      <Box mt="3rem">
        <Heading>Recent Posts</Heading>
        <VStack my="1rem" py="1rem" spacing="2rem">
          {allPosts.slice(0, 6).map((post) => (
            <RecentPostCard key={post.id} {...post} />
          ))}
        </VStack>
        <ReadMoreBtn href="/post">view all posts</ReadMoreBtn>
      </Box>
    </PageLayout>
  );
};

export default Home;
