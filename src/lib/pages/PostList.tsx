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
} from "@chakra-ui/react";
import { allPosts } from "contentlayer/generated";
import { motion } from "framer-motion";
import moment from "moment";
import Link from "next/link";
import { useMemo, useState } from "react";
import { IoSearch } from "react-icons/io5";

const MotionBox = motion(Box);

const PostPreviewCard = (props: any) => {
  return (
    <GridItem as={Link} key={props.slug} href={`/post/${props.slug}`}>
      <MotionBox
        textDecoration="none !important"
        borderRadius="15px"
        overflow="hidden"
        color="initial"
        bgColor={useColorModeValue("blue.200", "blue.800")}
        whileHover={{ scale: 1.02 }}
        transition={transition.defaultSpring}
      >
        <AspectRatio ratio={2 / 1}>
          <Img src={props.cover} />
        </AspectRatio>
        <VStack p="1rem" alignItems="flex-start" spacing="0.2rem">
          <Heading fontSize="2xl">{props.title}</Heading>
          <Text>
            {moment(props.date).format("MMMM Do, YYYY")} - {props.readTime!.text}
          </Text>
        </VStack>
      </MotionBox>
    </GridItem>
  );
};

const PostList = () => {
  const [posts, setPosts] = useState(allPosts);

  const handleSearch = (e: any) => {
    if (e.target.value === "") {
      setPosts(allPosts);
      return;
    } else {
      setPosts(allPosts.filter((post) => post.title.toLowerCase().includes(e.target.value.toLowerCase())));
    }
  };

  return (
    <PageLayout>
      <Box>
        <Box>
          <Heading>Blogs</Heading>
          <Text mt="1rem">This space is dedicated to sharing my thoughts, ideas, and experience.</Text>
          <InputGroup mt="2rem" size="lg">
            <Input
              bgColor={useColorModeValue("blackAlpha.200", "whiteAlpha.200")}
              variant="filled"
              placeholder="Search posts..."
              _focus={{
                boxShadow: useColorModeValue(
                  "0 0 800px 80px rgba(0, 0, 0, 0.2)",
                  "0 0 800px 80px rgba(255, 255, 255, 0.2)"
                ),
              }}
              transition="0.5s ease-in-out"
              onChange={useMemo(() => handleSearch, [])}
            />
            <InputRightElement>
              <Icon as={IoSearch} />
            </InputRightElement>
          </InputGroup>
        </Box>
        <Grid mt="5rem" templateColumns={{ base: "1fr", md: "1fr 1fr" }}>
          {posts.map((post) => (
            <PostPreviewCard key={post.slug} {...post} />
          ))}
        </Grid>
      </Box>
    </PageLayout>
  );
};

export default PostList;
