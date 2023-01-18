import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Hide,
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
import { IoHome, IoRocket, IoPerson, IoDocument, IoMoon, IoSunny } from "react-icons/io5";
import { IconType } from "react-icons/lib";

const NavLink = (props: { children?: React.ReactNode; path?: string; icon?: IconType; label: string }) => {
  return (
    <Tooltip label={props.label}>
      <Button
        as={Link}
        href={props.path ? props.path : "/"}
        borderRadius="15px"
        variant="ghost"
        border={"2px solid transparent"}
        _hover={{ border: useColorModeValue("2px solid #3182ce", "2px solid #63b3ed") }}
        transition="all 0.2s ease-in-out"
        p={0}
      >
        {props.icon && <Icon as={props.icon} />}
      </Button>
    </Tooltip>
  );
};

const navigationItem = [
  {
    label: "home",
    path: "/",
    icon: IoHome,
  },
  {
    label: "project",
    path: "/project",
    icon: IoRocket,
  },
  {
    label: "post",
    path: "/post",
    icon: IoDocument,
  },
  {
    label: "profile",
    path: "/about",
    icon: IoPerson,
  },
];

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
                  <NavLink key={item.path} {...item} />
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
              bgColor="blackAlpha.500"
              backdropFilter="blur(30px);"
            >
              {navigationItem.map((item: any) => (
                <NavLink key={item.path} {...item} />
              ))}
            </Flex>
          </Container>
        </Box>
      </Show>
    </>
  );
};

export default Navbar;