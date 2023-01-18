import { Button, Icon } from "@chakra-ui/react";
import Link from "next/link";
import { ImArrowRight2 } from "react-icons/im";
import { IconType } from "react-icons/lib/esm/iconBase";

export const ReadMoreBtn = (props: { href: string; children: React.ReactNode; icon?: IconType }) => {
  return (
    <Button
      as={Link}
      href={props.href}
      variant="outline"
      p="1.5rem"
      borderRadius="18px"
      borderWidth="3px"
      display="flex"
      w="max-content"
      alignItems="center"
    >
      {props.children}
      <Icon ml="0.5rem" as={ImArrowRight2} />
    </Button>
  );
};
