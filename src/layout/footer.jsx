import React from "react";
import {
  Box,
  Flex,
  Text,
  Link,
  VStack,
  HStack,
  Icon,
  Image,
  Container,
  Grid,
  Heading,
} from "@chakra-ui/react";
import FooterLogo from "../assets/FooterLogo.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const socialLinks = [
    { name: "Instagram", href: "https://www.instagram.com/acm_iit/" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/acm-iit/" },
    { name: "Discord", href: "https://discord.com/invite/SJS8468yHc" },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Flex
      bg="brand.secondary"
      padding={{ base: "0px 20px", md: "0px 50px", lg: "0px 120px" }}
      w={"100%"}
    >
      <Box as="footer" pt={12} pb={2} w={"100%"}>
        <Container maxW="1000px">
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
            gap={8}
            justifyItems={{ base: "center", md: "none" }}
          >
            {/* Logo Section */}
            <Box>
              <Image src={FooterLogo} alt="Scarlet Hacks 2025" maxW="250px" />
            </Box>

            {/* Stay Connected Section */}
            <VStack align={{ base: "center", md: "flex-start" }} spacing={4}>
              <Text
                as="h3"
                fontSize="2xl"
                color="brand.primary"
                mb={2}
                fontWeight={"600"}
              >
                Stay connected
              </Text>
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  color="black"
                  _hover={{ color: "brand.primary" }}
                  fontSize={"xl"}
                  target="_blank"
                >
                  {link.name}
                </Link>
              ))}
            </VStack>

            {/* Quick Links Section */}
            <VStack align={{ base: "center", md: "flex-start" }} spacing={4}>
              <Text
                as="h3"
                fontSize="2xl"
                color="brand.primary"
                mb={2}
                fontWeight={"600"}
              >
                Links
              </Text>
              <Link
                color="black"
                _hover={{ color: "brand.primary" }}
                fontSize={"xl"}
                href="https://forms.office.com/r/SngGaAkhZR"
                target="_blank"
              >
                Register Now
              </Link>
              <Link
                color="black"
                _hover={{ color: "brand.primary" }}
                fontSize={"xl"}
                onClick={() => {
                  navigate("/");
                  setTimeout(() => {
                    handleScroll("faqsSection");
                  }, 1000);
                }}
              >
                FAQs
              </Link>
            </VStack>
          </Grid>

          {/* Footer Bottom Text */}
          <HStack
            justify="center"
            mt={8}
            spacing={1}
            fontSize={"xl"}
            flexWrap={"wrap"}
          >
            <Text>Made with</Text>
            <Box as="span" color="brand.primary">
              &#x2665;&#xfe0f;
            </Box>
            <Text>by the</Text>
            <Link href="https://acmillinoistech.org/team" target="_blank">
              <Text color="brand.primary" fontWeight="bold">
                ScarletHacks
              </Text>
            </Link>
            <Text>team</Text>
          </HStack>
        </Container>
      </Box>
    </Flex>
  );
};

export default Footer;
