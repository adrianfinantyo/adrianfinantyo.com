import { Box, Button, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { navigationItem } from "../constants/link";

const Footer = (props: any) => {
  return (
    <Box as="footer" {...props}>
      <Divider my="3rem" h="5px" w="100%" />
      <VStack alignItems="flex-start">
        <HStack my="2rem" textTransform="capitalize" spacing="1rem">
          {navigationItem.map((item) => (
            <Link href={item.href} key={item.label}>
              {item.label}
            </Link>
          ))}
        </HStack>
        <Text>
          © 2023, Made with ❤️️ by <Link href="/">Adrian Fiantnyo</Link>.
        </Text>
      </VStack>
    </Box>
  );
};

export default Footer;
