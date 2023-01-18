import { Box, Button, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { Link as ChakraLink } from "@chakra-ui/react";

const Footer = (props: any) => {
  return (
    <Box as="footer" {...props}>
      <Divider my="3rem" h="5px" w="100%" />
      <VStack alignItems="flex-start">
        <HStack my="2rem">
          <ChakraLink href="/">Base</ChakraLink>
        </HStack>
        <Text>
          © 2023, Made with ❤️️ by <Link href="/">Adrian Fiantnyo</Link>.
        </Text>
      </VStack>
    </Box>
  );
};

export default Footer;
