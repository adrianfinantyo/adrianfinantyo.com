import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Show,
  Spacer,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { IoMoon, IoSunny } from "react-icons/io5";
import { navigationItem } from "../constants/link";
import { NavLink } from "./shared";

const colorModeVariants = {
  in: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 },
  },
  out: { y: -80 },
};

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box
        as="nav"
        py="1.5rem"
        pos="fixed"
        w="100%"
        top="0"
        left="0"
        zIndex={99}
        backdropFilter="saturate(180%) blur(6px);"
        bgColor={useColorModeValue("rgba(237, 242, 247, 0.8)", "RGBA(0, 0, 0, 0.8)")}
      >
        <Container as={Flex} alignItems="center" maxW={{ base: "container.sm", "2xl": "container.lg" }}>
          <Link href="/">
            <Heading size="sm">adrianfinantyo.com</Heading>
          </Link>
          <Spacer />
          <Flex gap="2rem">
            <Show above="md">
              <HStack>
                {navigationItem.map((item) => (
                  <NavLink key={item.href} {...item} />
                ))}
              </HStack>
            </Show>
            <HStack>
              <Tooltip label="theme toggle">
                <Button
                  onClick={toggleColorMode}
                  borderRadius="15px"
                  variant="ghost"
                  border={"2px solid transparent"}
                  _hover={{ border: useColorModeValue("2px solid #3182ce", "2px solid #63b3ed") }}
                  transition="all 0.2s ease-in-out"
                  color={useColorModeValue("", "yellow.400")}
                >
                  <motion.span
                    animate={colorMode === "light" ? "in" : "out"}
                    variants={colorModeVariants}
                    style={{ position: "absolute" }}
                  >
                    <Icon as={IoMoon} />
                  </motion.span>
                  <motion.span
                    animate={colorMode === "light" ? "out" : "in"}
                    variants={colorModeVariants}
                    style={{ position: "absolute" }}
                  >
                    <Icon as={IoSunny} />
                  </motion.span>
                </Button>
              </Tooltip>
            </HStack>
          </Flex>
        </Container>
      </Box>
      <Show below="md">
        <Box position="fixed" bottom={0} left={0} zIndex={99} w="100%" pb="3rem">
          <Container maxW={{ base: "container.sm", "2xl": "container.lg" }}>
            <Flex
              justifyContent="space-around"
              alignItems="center"
              py="1rem"
              borderRadius="15px"
              bgColor={useColorModeValue("rgba(237, 242, 247, 0.4)", "RGBA(0, 0, 0, 0.4)")}
              backdropFilter="saturate(180%) blur(6px);"
            >
              {navigationItem.map((item: any) => (
                <NavLink key={item.href} {...item} />
              ))}
            </Flex>
          </Container>
        </Box>
      </Show>
    </>
  );
};

export default Navbar;
