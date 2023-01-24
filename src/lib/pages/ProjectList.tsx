import PageLayout from "@/lib/components/PageLayout";
import { transition } from "@/lib/constants/anim";
import {
  AspectRatio,
  Box,
  Grid,
  GridItem,
  Heading,
  Img,
  Input,
  Text,
  VStack,
  useColorModeValue,
  InputRightElement,
  InputGroup,
  Icon,
  Avatar,
  Flex,
  HStack,
  Tag,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { allProjects } from "contentlayer/generated";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { IoSearch } from "react-icons/io5";

const MotionBox = motion(Box);

const ProjectPreviewCard = (props: any) => {
  return (
    <GridItem as={Link} href={`/project/${props.slug}`}>
      <MotionBox
        textDecoration="none !important"
        borderRadius="15px"
        overflow="hidden"
        color="initial"
        bgColor={useColorModeValue("gray.300", "blue.800")}
        whileHover={{ scale: 1.02 }}
        transition={transition.defaultSpring}
      >
        <AspectRatio ratio={2 / 1}>
          <Img src={props.cover} />
        </AspectRatio>
        <Flex px="2rem" py="1rem" gap="1rem" alignItems="center">
          <Avatar src={props.logo} />
          <VStack alignItems="flex-start" spacing="0.5rem">
            <Heading fontSize="2xl">{props.name}</Heading>
            <Text>{props.title}</Text>
            <Wrap>
              {props.stack.map((stck: any) => (
                <WrapItem key={stck} as={Tag} colorScheme="teal">
                  {stck}
                </WrapItem>
              ))}
            </Wrap>
          </VStack>
        </Flex>
      </MotionBox>
    </GridItem>
  );
};

const ProjectList = () => {
  const [projects, setProjects] = useState(allProjects);
  const router = useRouter();

  const filterProjects = (query: string) => {
    return allProjects.filter(
      (project) =>
        project.name.toLowerCase().includes(query.toLowerCase()) ||
        project.stack.find((stck) => stck.toLowerCase().includes(query.toLowerCase())) != undefined
    );
  };

  const handleSearch = (e: any) => {
    if (e.target.value == "" || e.target.value == undefined) {
      setProjects(allProjects);
    } else {
      setProjects(filterProjects(e.target.value));
    }
  };

  useEffect(() => {
    console.log(router.query);
    if (router.query.stack) {
      setProjects(filterProjects(router.query.stack as string));
    } else if (router.query.search) {
      setProjects(filterProjects(router.query.search as string));
    }
  }, [router.query.stack, router.query.search]);

  return (
    <PageLayout>
      <Box>
        <Box>
          <Heading>Projects</Heading>
          <Text mt="1rem">This space is dedicated to show my projects.</Text>
          <InputGroup mt="2rem" size="lg">
            <Input
              onChange={useMemo(() => handleSearch, [])}
              bgColor={useColorModeValue("blackAlpha.200", "whiteAlpha.200")}
              variant="filled"
              placeholder="Search projects or tags..."
              _focus={{
                boxShadow: useColorModeValue(
                  "0 0 800px 80px rgba(0, 0, 0, 0.2)",
                  "0 0 800px 80px rgba(255, 255, 255, 0.2)"
                ),
              }}
              transition="0.5s ease-in-out"
              defaultValue={router.query.stack || router.query.search || ""}
            />
            <InputRightElement>
              <Icon as={IoSearch} />
            </InputRightElement>
          </InputGroup>
        </Box>
        <Grid mt="5rem" templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap="2rem">
          {projects.map((project) => (
            <ProjectPreviewCard {...project} key={project.slug} />
          ))}
        </Grid>
      </Box>
    </PageLayout>
  );
};

export default ProjectList;
