import PageLayout from "../components/PageLayout";
import { utils } from "@/lib/utils/content";
import { useRouter } from "next/router";
import { Flex, HStack, Avatar, VStack, Heading, Text, Box, Divider, Img, AspectRatio } from "@chakra-ui/react";
import moment from "moment";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import rehypeRaw from "rehype-raw";
import { IoLink, IoLogoTwitter, IoLogoWhatsapp, IoShareSocial } from "react-icons/io5";
import { NavLink } from "../components/shared";
import { useCallback } from "react";

const PostDetails = () => {
  const router = useRouter();
  const { slug } = router.query;

  const postData = utils.getPostBySlug(slug as string);

  const handleSharePost = useCallback(() => {
    if (navigator.share) {
      navigator.share({
        title: postData?.title,
        text: `Check out this article: "${postData?.title} on ${window.location.href}"`,
      });
    } else {
      navigator.clipboard.writeText(`Check out this article: "${postData?.title}" on ${window.location.href}`);
    }
  }, [postData]);

  return (
    <PageLayout>
      <AspectRatio ratio={2 / 1} borderRadius="15px" overflow="hidden" mb={{ base: "2rem", md: "3rem" }}>
        <Img src={postData?.cover} />
      </AspectRatio>
      <Heading fontSize={{ base: "3xl", xl: "6xl" }}>{postData?.title}</Heading>
      <Flex justifyContent="space-between" my={{ base: "2rem", md: "3rem" }}>
        <HStack spacing="1.5rem" mb="1rem">
          <Avatar size="lg" name="Adrian Finantyo" src="/images/adrianfinantyo-profilepict.png" />
          <VStack alignItems="flex-start" spacing="0.2rem">
            <Heading size="md">Bonifasius Ariesto Adrian Finantyo</Heading>
            <Text>
              {moment(postData?.date).format("MMM Do, YYYY")} - {postData?.readTime?.text}
            </Text>
            <NavLink icon={IoShareSocial} label="share this post" action={handleSharePost} variant="solid" />
          </VStack>
        </HStack>
      </Flex>
      <ReactMarkdown components={ChakraUIRenderer(newTheme)} rehypePlugins={[rehypeRaw]}>
        {postData?.body?.html as string}
      </ReactMarkdown>
    </PageLayout>
  );
};

export default PostDetails;

const newTheme = {
  h1: (props: any) => (
    <Box mt="2rem" mb="1rem">
      <Heading mb="1rem" fontSize={{ base: "4xl", md: "5xl", "2xl": "6xl" }}>
        {props.children}
      </Heading>
      <Divider borderWidth="2px" />
    </Box>
  ),
  h2: (props: any) => (
    <Heading mt="1rem" mb="0rem" fontSize={{ base: "2xl", md: "3xl", "2xl": "4xl" }}>
      {props.children}
    </Heading>
  ),
  p: (props: any) => (
    <Text my="1rem" fontSize={{ base: "md", md: "lg", "2xl": "xl" }}>
      {props.children}
    </Text>
  ),
  img: (props: any) => (
    <Box my={{ base: "1rem", lg: "2rem" }}>
      <motion.span whileHover={{ scale: 0.95 }} style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Img {...props} borderRadius="10px" w={{ base: "100%", lg: "80%" }} />
      </motion.span>
    </Box>
  ),
};
