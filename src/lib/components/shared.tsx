import { Button, Icon, Tooltip, useColorModeValue } from "@chakra-ui/react";
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

export const NavLink = (props: {
  children?: React.ReactNode;
  href?: string;
  icon?: IconType;
  label: string;
  variant?: "clear" | "solid";
  action?: () => void;
}) => {
  return (
    <Tooltip label={props.label}>
      <Button
        as={props.action ? Button : Link}
        href={props.href ? props.href : ""}
        onClick={props.action ? props.action : () => {}}
        borderRadius="15px"
        variant="ghost"
        border={"2px solid transparent"}
        _hover={{ border: useColorModeValue("2px solid #3182ce", "2px solid #63b3ed") }}
        transition="all 0.2s ease-in-out"
        p={0}
        bgColor={props.variant === "solid" ? useColorModeValue("blackAlpha.200", "whiteAlpha.200") : ""}
      >
        {props.icon && <Icon as={props.icon} />}
      </Button>
    </Tooltip>
  );
};
