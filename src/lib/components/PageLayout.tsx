import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";

const PageLayout = (props: any) => {
  return (
    <>
      <Head>
        <title>{props.title ? props.title : "Adrian Finantyo"}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box {...props}>{props.children}</Box>
    </>
  );
};

export default PageLayout;