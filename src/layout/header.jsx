import React from "react";
import {
  Box,
  Flex,
  Spacer,
  Link,
  Button,
  Icon,
  HStack,
  Text,
  Image,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
const Header = () => {
  const navigate = useNavigate();

  return (
    <Flex bg="brand.secondary" w={"100%"} p={"10px 100px"} alignItems="center">
      <Flex w={"100%"} alignItems="center">
        {/* Logo */}
        <Link href="/" _hover={{ textDecoration: "none" }}>
          <Image src={Logo} alt="ScarletHacks2025Logo" h={"75px"} />
        </Link>
      </Flex>

      <Flex alignItems="center">
        <HStack spacing={6} ml={8} display={{ base: "none", md: "flex" }}>
          <Link
            href={`/category/${1}`}
            color="brand.text"
            fontSize="xl"
            fontWeight="500"
          >
            Tracks
          </Link>
          <Link
            href={`/category/${2}`}
            color="brand.text"
            fontSize="xl"
            fontWeight="500"
          >
            Prizes
          </Link>
          <Link
            href={`/category/${3}`}
            color="brand.text"
            fontSize="xl"
            fontWeight="500"
          >
            Sponsors
          </Link>
          <Link
            href={`/category/${4}`}
            color="brand.text"
            fontSize="xl"
            fontWeight="500"
          >
            FAQs
          </Link>
          <Button
            variant="custom"
            letterSpacing={"1px"}
            textTransform="uppercase"
            onClick={() => {
              navigate("/register");
            }}
            size={"lg"}
          >
            Register
          </Button>
        </HStack>
      </Flex>
      {/* Navigation Links */}
    </Flex>
  );
};

export default Header;
