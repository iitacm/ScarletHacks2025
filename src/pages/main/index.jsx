import {
  Flex,
  Image,
  Text,
  Button,
  Box,
  VStack,
  Heading,
} from "@chakra-ui/react";
import MinimalistLogo from "../../assets/ScarletHacks2025MinimalistLogo.png";
import track1 from "../../assets/track1.png";
import track2 from "../../assets/track2.png";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

export const MainPage = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({
    days: "--",
    hours: "--",
    minutes: "--",
    seconds: "--",
  });

  const targetDate = new Date("2025-04-05T23:59:59").getTime();

  // Function to calculate the remaining time
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      return {
        days: "0",
        hours: "0",
        minutes: "0",
        seconds: "0",
      };
    }

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    };
  };

  useEffect(() => {
    // Set the initial state
    setTimeLeft(calculateTimeLeft());

    // Update the countdown every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <Flex w="100%" flexDirection={"column"}>
      {/* INFO & LOGO */}
      <Flex
        w="100%"
        flexDirection={"row"}
        justifyContent={"space-between"}
        position={"relative"}
      >
        <Flex
          _before={{
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            w: "100%",
            h: "100%",
            bgImage: { base: `url(${MinimalistLogo})`, md: "none" },
            bgRepeat: "no-repeat",
            bgPosition: "center",
            opacity: 0.2, // Set the opacity of the background image
            zIndex: -1, // Place behind the content
            display: { base: "block", md: "none" },
            bgSize: "contain",
          }}
          justifyContent={"space-between"}
        >
          <VStack
            alignItems={{ base: "center", md: "flex-start" }}
            justifyContent={"center"}
            gap={"15px"}
            w={{ base: "100%", md: "45%" }}
            h={{ base: "500px", md: "auto" }}
          >
            <Text
              fontSize={"3xl"}
              fontWeight={"400"}
              lineHeight={"35px"}
              textAlign={{ base: "center", md: "left" }}
            >
              <Text
                as="span"
                textTransform={"uppercase"}
                color={"brand.primary"}
                fontWeight={"700"}
              >
                Scarlet Hacks,{" "}
              </Text>
              Illinois Tech's biggest hackathon, empowers students to create
              tech solutions for sustainability and social equity, driving
              innovation and meaningful impact.
            </Text>
            <Text fontSize={"3xl"} color={"brand.primary"} fontWeight={"700"}>
              April 5-6, 2025
            </Text>
            <Button
              variant={"custom"}
              letterSpacing={"1px"}
              textTransform="uppercase"
              onClick={() => {
                navigate("/register");
              }}
              size="lg"
              width={"200px"}
              fontSize={"xl"}
            >
              Register
            </Button>
          </VStack>
          <Flex
            justifyContent={"center"}
            w={"45%"}
            flexWrap={"wrap"}
            display={{ base: "none", md: "flex" }}
          >
            <Image
              src={MinimalistLogo}
              alt="ScarletHacks2025MinimalistLogo"
              w={"100%"}
              maxWidth={"600px"}
            />
          </Flex>
        </Flex>
      </Flex>

      {/* COUNTDOWN CLOCK */}
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        gap={{ base: "10px", md: "25px" }}
        margin={"50px 0"}
      >
        <Flex
          w={{ base: "80px", md: "150px", lg: "180px" }}
          h={{ base: "80px", md: "150px", lg: "180px" }}
          bgColor={"brand.tertiary"}
          alignItems={"center"}
          justifyContent={"center"}
          position={"relative"}
          borderRadius={"5px"}
        >
          <Text
            fontSize={{ base: "3xl", md: "5xl", lg: "8xl" }}
            color={"brand.primary"}
            fontWeight={"500"}
          >
            {timeLeft.days ?? "00"}
          </Text>
          <Text
            textTransform={"uppercase"}
            textAlign={"end"}
            position={"absolute"}
            bottom={"0"}
            right={"0"}
            margin={{ base: "3px", md: "10px" }}
            fontWeight={"500"}
            fontSize={{ base: "xs", md: "lg", lg: "xl" }}
          >
            days
          </Text>
        </Flex>
        <Flex
          w={{ base: "80px", md: "150px", lg: "180px" }}
          h={{ base: "80px", md: "150px", lg: "180px" }}
          bgColor={"brand.tertiary"}
          alignItems={"center"}
          justifyContent={"center"}
          position={"relative"}
          borderRadius={"5px"}
        >
          <Text
            fontSize={{ base: "3xl", md: "5xl", lg: "8xl" }}
            color={"brand.primary"}
            fontWeight={"500"}
          >
            {timeLeft.hours ?? "00"}
          </Text>
          <Text
            textTransform={"uppercase"}
            textAlign={"end"}
            position={"absolute"}
            bottom={"0"}
            right={"0"}
            margin={{ base: "3px", md: "10px" }}
            fontWeight={"500"}
            fontSize={{ base: "xs", md: "lg", lg: "xl" }}
          >
            hours
          </Text>
        </Flex>
        <Flex
          w={{ base: "80px", md: "150px", lg: "180px" }}
          h={{ base: "80px", md: "150px", lg: "180px" }}
          bgColor={"brand.tertiary"}
          alignItems={"center"}
          justifyContent={"center"}
          position={"relative"}
          borderRadius={"5px"}
        >
          <Text
            fontSize={{ base: "3xl", md: "5xl", lg: "8xl" }}
            color={"brand.primary"}
            fontWeight={"500"}
          >
            {timeLeft.minutes ?? "00"}
          </Text>
          <Text
            textTransform={"uppercase"}
            textAlign={"end"}
            position={"absolute"}
            bottom={"0"}
            right={"0"}
            margin={{ base: "3px", md: "10px" }}
            fontWeight={"500"}
            fontSize={{ base: "xs", md: "lg", lg: "xl" }}
          >
            minutes
          </Text>
        </Flex>
        <Flex
          w={{ base: "80px", md: "150px", lg: "180px" }}
          h={{ base: "80px", md: "150px", lg: "180px" }}
          bgColor={"brand.tertiary"}
          alignItems={"center"}
          justifyContent={"center"}
          position={"relative"}
          borderRadius={"5px"}
        >
          <Text
            fontSize={{ base: "3xl", md: "5xl", lg: "8xl" }}
            color={"brand.primary"}
            fontWeight={"500"}
          >
            {timeLeft.seconds ?? "00"}
          </Text>
          <Text
            textTransform={"uppercase"}
            textAlign={"end"}
            position={"absolute"}
            bottom={"0"}
            right={"0"}
            margin={{ base: "3px", md: "10px" }}
            fontWeight={"500"}
            fontSize={{ base: "xs", md: "lg", lg: "xl" }}
          >
            seconds
          </Text>
        </Flex>
      </Flex>

      {/* TRACKS */}
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        margin={"50px 0"}
        gap={"20px"}
      >
        <Text
          fontSize={"4xl"}
          fontWeight={"600"}
          color={"brand.primary"}
          textAlign={"center"}
          margin={"0"}
          textTransform={"uppercase"}
          letterSpacing={"3px"}
        >
          Tracks
        </Text>
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"100px"}
          w="100%"
        >
          <Image
            src={track1}
            alt="evironment-sustainability-image"
            maxW={{ base: "200px", md: "300px", lg: "400px" }}
            display={{ base: "none", md: "block" }}
          />
          <VStack
            align="flex-start"
            spacing={6}
            maxWidth={"600px"}
            alignItems={"center"}
          >
            <Text color="brand.primary" fontSize="3xl" fontWeight={"500"}>
              Environmental Sustainability
            </Text>
            <Image
              src={track1}
              alt="evironment-sustainability-image"
              maxWidth={"250px"}
              display={{ base: "block", md: "none" }}
            />
            <Text fontSize="2xl">
              Projects in this track target pressing environmental issues,
              encouraging innovations that contribute to a healthier planet.
            </Text>
            <Text fontSize="2xl">
              Examples include clean energy, waste reduction, sustainable
              agriculture, and climate change mitigation.
            </Text>
          </VStack>
        </Flex>
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"20px"}
          w="100%"
        >
          <VStack
            align="flex-start"
            spacing={6}
            maxWidth={"600px"}
            alignItems={"center"}
          >
            <Text color="brand.primary" fontSize="3xl" fontWeight={"500"}>
              Social Equity & Inclusion
            </Text>
            <Image
              src={track2}
              alt="social-equity-and-inclusion-image"
              maxWidth={"250px"}
              display={{ base: "block", md: "none" }}
            />
            <Text fontSize="2xl">
              This track invites participants to develop technologies and tools
              that enhance access to essential resources for underserved
              communities.
            </Text>
            <Text fontSize="2xl">
              Examples include platforms for accessible education, healthcare
              access, financial literacy, and community-driven development.
            </Text>
          </VStack>
          <Image
            src={track2}
            alt="social-equity-and-inclusion-image"
            maxW={{ base: "200px", md: "300px", lg: "400px" }}
            display={{ base: "none", md: "block" }}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
