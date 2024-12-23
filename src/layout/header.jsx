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
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import { HamburgerIcon } from "@chakra-ui/icons";

const Header = () => {
  const navigate = useNavigate();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "#about" },
    { name: "Schedule", path: "#schedule" },
    { name: "Tracks", path: "#tracks" },
    { name: "FAQ", path: "#faq" },
    { name: "Contact Us", path: "#contact" },
  ];

  return (
    <Flex
      bg="brand.background"
      w={"100%"}
      padding={{ base: "20px 20px", md: "20px 50px", lg: "20px 120px" }}
      alignItems="center"
      justifyContent={"space-between"}
    >
      {/* Logo */}
      <Link href="/" _hover={{ textDecoration: "none" }}>
        <Image
          src={Logo}
          alt="ScarletHacks2025Logo"
          h={"75px"}
          minWidth={"200px"}
        />
      </Link>

      <Flex alignItems="center">
        <HStack spacing={6} ml={8} display={{ base: "none", lg: "flex" }}>
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
            _hover={{ bg: "red.700" }}
          >
            Register
          </Button>
        </HStack>
      </Flex>
      {/* Navigation Links */}
      <>
        <IconButton
          icon={<HamburgerIcon fontSize="20px" />}
          onClick={onOpen}
          variant="ghost"
          size="2xl"
          aria-label="Open Menu"
          display={{ base: "flex", lg: "none" }}
        />

        <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton
              size={"3xl"}
              position={"absolute"}
              margin={"15px"}
            />
            <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>

            <DrawerBody>
              <VStack spacing={4} align="stretch" mt={4}>
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    fontSize="lg"
                    fontWeight="medium"
                    _hover={{ color: "red.600" }}
                    onClick={onClose}
                  >
                    {link.name}
                  </Link>
                ))}
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    </Flex>
  );
};

export default Header;
