import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Icon, chakra, useColorModeValue } from "@chakra-ui/react";
import { HiDotsHorizontal } from "react-icons/hi";
import React from "react";

export const PagButton = (props) => {
  const activeStyle = {
    bg: "brand.600",
    _dark: {
      bg: "brand.500",
    },
    color: "grey",
  };
  return (
    <chakra.button
      mx={1}
      px={4}
      py={2}
      rounded="md"
      bg="white"
      _dark={{
        bg: "gray.800",
      }}
      color="gray.700"
      opacity={props.disabled && 0.6}
      _hover={!props.disabled && activeStyle}
      cursor={props.disabled && "not-allowed"}
      {...(props.active && activeStyle)}
    >
      {props.children}
    </chakra.button>
  );
};

export const MButton = (props) => {
  const DoubleArrow = props.left ? ArrowLeftIcon : ArrowRightIcon;
  const [hovered, setHovered] = React.useState(false);
  const hoverColor = useColorModeValue("brand.800", "brand.700");
  const unHoverColor = useColorModeValue("gray.100", "gray.200");
  return (
    <chakra.a
      w={4}
      py={2}
      color="gray.700"
      _dark={{
        color: "gray.200",
      }}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      cursor="pointer"
      textAlign="center"
    >
      {hovered ? <Icon as={DoubleArrow} boxSize={3} cursor="pointer" color={hoverColor} /> : <Icon as={HiDotsHorizontal} color={unHoverColor} boxSize={4} opacity={0.5} />}
    </chakra.a>
  );
};
