import { Box, Button, Divider, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { externalLink, navigationItem } from "@/lib/constants/link";

const Footer = (props: any) => {
  return (
    <Box as="footer" {...props}>
      <Divider my="3rem" h="5px" w="100%" />
      <VStack alignItems="flex-start">
        <Flex gap="3rem">
          <HStack my="1rem" textTransform="capitalize" spacing="1rem">
            {navigationItem.map((item) => (
              <Link href={item.href} key={item.label}>
                {item.label}
              </Link>
            ))}
          </HStack>
          <HStack my="1rem" textTransform="capitalize" spacing="1rem">
            {externalLink.map((item) => (
              <Link href={item.href} key={item.label} target="_blank">
                {item.label}
              </Link>
            ))}
          </HStack>
        </Flex>
        <Text>
          © 2023, Made with ❤️️ by <Link href="/">Adrian Fiantnyo</Link>.
        </Text>
      </VStack>
    </Box>
  );
};

export default Footer;
