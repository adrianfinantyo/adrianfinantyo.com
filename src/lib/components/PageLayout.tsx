import { Box, Container } from "@chakra-ui/react";

const PageLayout = (props: any) => {
  return (
    <>
      <Box {...props}>{props.children}</Box>
    </>
  );
};

export default PageLayout;
