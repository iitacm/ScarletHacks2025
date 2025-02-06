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
import { FadeInTop } from "../components/Animations";

const Header = ({ sectionRefs }) => {
  const navigate = useNavigate();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const navLinks = [
    { name: "About", path: "aboutSection" },
    { name: "Schedule", path: "scheduleSection" },
    { name: "Tracks", path: "tracksSection" },
    { name: "Prizes", path: "prizesSection" },
    { name: "FAQ", path: "faqsSection" },
    { name: "Contact Us", path: "contactUsSection" },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <FadeInTop>
      <Flex
        bg="brand.background"
        w={"100%"}
        padding={{ base: "20px 20px", md: "20px 50px", lg: "20px 120px" }}
        alignItems="center"
        justifyContent={"space-between"}
      >
        {/* Logo */}
        <Link onClick={() => navigate("/")} _hover={{ textDecoration: "none" }}>
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
              onClick={() => handleScroll("tracksSection")}
              color="brand.text"
              fontSize="xl"
              fontWeight="500"
            >
              Tracks
            </Link>
            <Link
              href={`#prizes`}
              color="brand.text"
              fontSize="xl"
              fontWeight="500"
              onClick={() => handleScroll("prizesSection")}
            >
              Prizes
            </Link>
            <Link
              href={`#sponsors`}
              color="brand.text"
              fontSize="xl"
              fontWeight="500"
              onClick={() => handleScroll("sponsorsSection")}
            >
              Sponsors
            </Link>
            <Link
              href={`#faq`}
              color="brand.text"
              fontSize="xl"
              fontWeight="500"
              onClick={() => handleScroll("faqsSection")}
            >
              FAQs
            </Link>
            <Link href="https://forms.office.com/r/SngGaAkhZR" target="_blank">
              <Button
                variant="custom"
                letterSpacing={"1px"}
                textTransform="uppercase"
                size={"lg"}
                _hover={{ bg: "red.700" }}
              >
                Register
              </Button>
            </Link>
          </HStack>
        </Flex>
        {/* Navigation Links */}
        <>
          <IconButton
            icon={<HamburgerIcon fontSize="30px" />}
            onClick={onOpen}
            variant="ghost"
            size="lg"
            aria-label="Open Menu"
            display={{ base: "flex", lg: "none" }}
          />

          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            size="xs"
            preserveScrollBarGap={true}
            blockScrollOnMount={false}
            autoFocus={false}
            returnFocusOnClose={false}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton
                size={"5xl"}
                position={"absolute"}
                margin={"15px"}
                fontSize={"20px"}
              />
              {/* <DrawerHeader borderBottomWidth="1px"></DrawerHeader> */}

              <DrawerBody>
                <VStack
                  spacing={4}
                  align="stretch"
                  mt={12}
                  alignItems={"center"}
                  h={"60%"}
                  justifyContent={"space-around"}
                >
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      fontSize="xl"
                      fontWeight="medium"
                      _hover={{ color: "red.600" }}
                      onClick={() => {
                        navigate("/");
                        setTimeout(() => {
                          handleScroll(`${link.path}`);
                          onClose();
                        }, 1000);
                      }}
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
    </FadeInTop>
  );
};

export default Header;
