import PageLayout from "../components/PageLayout";
import { allProjects } from "contentlayer/generated";
import { useRouter } from "next/router";
import { Heading, Text, Img, AspectRatio, Avatar, Flex, VStack, HStack, Tag, Button, Icon } from "@chakra-ui/react";
import DefaultErrorPage from "next/error";
import Link from "next/link";
import { IoArrowBack, IoOpenOutline } from "react-icons/io5";

const ProjectDetails = () => {
  const router = useRouter();
  const { slug } = router.query;

  const postData = allProjects.find((project) => project.slug === slug);

  if (!postData) {
    return <DefaultErrorPage statusCode={404} />;
  }

  return (
    <PageLayout>
      <Button mb="2rem" variant="link" leftIcon={<Icon as={IoArrowBack} />} onClick={() => router.back()}>
        Previous page
      </Button>

      <AspectRatio ratio={2 / 1} borderRadius="15px" overflow="hidden" mb={{ base: "2rem", md: "3rem" }}>
        <Img src={postData?.cover} />
      </AspectRatio>
      <VStack alignItems="flex-start" spacing="2rem">
        <Flex alignItems="center" gap="1rem">
          <Avatar size="xl" src={postData?.logo} />
          <VStack alignItems="flex-start">
            <Heading fontSize={{ base: "3xl", xl: "6xl" }}>{postData?.name}</Heading>
            <Heading fontSize={{ base: "xl", xl: "2xl" }}>{postData?.title}</Heading>
          </VStack>
        </Flex>
        <HStack>
          {postData?.projectLink && (
            <Button as={Link} href={postData?.projectLink} target="_blank" rightIcon={<Icon as={IoOpenOutline} />}>
              View Project
            </Button>
          )}
          {postData?.githubLink && (
            <Button as={Link} href={postData?.githubLink} target="_blank" rightIcon={<Icon as={IoOpenOutline} />}>
              View Repository
            </Button>
          )}
        </HStack>
        <Text fontSize={{ base: "md", xl: "lg" }}>{postData?.description}</Text>
        <HStack>
          <Text>Stack: </Text>
          {postData?.stack?.map((stck) => (
            <Tag as={Link} key={stck} colorScheme="teal" href={`/project?stack=${stck}`}>
              {stck}
            </Tag>
          ))}
        </HStack>
      </VStack>
    </PageLayout>
  );
};

export default ProjectDetails;
