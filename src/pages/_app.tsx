import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Box, ChakraProvider, useColorModeValue, extendTheme, Container } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import Navbar from "@/lib/components/Navbar";
import Footer from "@/lib/components/Footer";
import NextNProgress from "nextjs-progressbar";
import { DefaultSeo } from "next-seo";
import { SEOConfig } from "@/lib/constants/config";

const config = {
  useSystemColorMode: true,
  // initialColorMode: "light",
};

const styles = {
  global: (props: any) => ({
    body: {
      color: mode("gray.800", "whiteAlpha.900")(props),
      bgColor: mode("gray.100", "blackAlpha.800")(props),
    },
    a: {
      color: mode("blue.500", "blue.300")(props),
      fontWeight: "bold",
    },
  }),
};

const components = {
  Icon: {
    baseStyle: {
      boxSize: { base: 6, md: 5 },
    },
  },
};

const theme = extendTheme({
  config,
  styles,
  components,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW={{ base: "container.sm", "2xl": "container.lg" }}>
        <Navbar />
        <Box pt="8rem">
          <NextNProgress color="#4299E1" />
          <DefaultSeo {...SEOConfig} />
          <Component {...pageProps} />
        </Box>
        <Footer pb={{ base: "10rem", md: "8rem" }} />
      </Container>
    </ChakraProvider>
  );
}
