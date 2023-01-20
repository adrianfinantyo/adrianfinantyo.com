import { Box, Container } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Head from "next/head";

const PageLayout = (props: any) => {
  return (
    <>
      <NextSeo
        title={props.title ? props.title : "Adrian Finantyo - Software Engineer | React Enthusiast"}
        description="Bonifasius Ariesto Adrian Finantyo's Personal Website"
        canonical="https://adrianfinantyo.com/"
        openGraph={{
          url: "https://adrianfinantyo.com/",
          title: "Adrian Finantyo",
          description:
            "Hi! I'm Adrian Finantyo and I'm a software engineer based in Indonesia. I'm a full-stack developer with a passion for building web applications and solving problems.",
          images: [
            {
              url: "/images/adrianweb-og.png",
              width: 1920,
              height: 1080,
              alt: "Adrian Finantyo",
            },
          ],
          site_name: "Adrian Finantyo",
        }}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/favicon.ico",
          },
        ]}
      />
      <Box {...props}>{props.children}</Box>
    </>
  );
};

export default PageLayout;
