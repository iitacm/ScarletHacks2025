import React from "react";
import {
  Box,
  Container,
  Heading,
  VStack,
  HStack,
  Text,
  Flex,
  Image,
  Icon,
} from "@chakra-ui/react";
import { StarIcon, TriangleUpIcon } from "@chakra-ui/icons";
import { FaTrophy, FaMedal, FaAward, FaStar } from "react-icons/fa";
import FirstPrize from "../assets/1st-prize.png";
import SecondPrize from "../assets/2nd-prize.png";
import ThirdPrize from "../assets/3rd-prize.png";
import MLPrize from "../assets/ml-prize.png";
import { FadeInBottom } from "./Animations";

const PrizeCard = ({
  rank,
  amount,
  prizeText,
  description,
  icon,
  imageSrc,
}) => {
  return (
    <Box
      p={6}
      borderRadius="md"
      bg={"brand.tertiary"}
      boxShadow="md"
      borderTop="4px solid"
      borderColor={"brand.primary"}
      transition="transform 0.3s ease"
      _hover={{ transform: "translateY(-5px)" }}
      maxW={{ base: "100%", lg: "350px" }}
      minW={{ base: "100%", lg: "300px" }}
    >
      <FadeInBottom>
        <VStack spacing={4} align="start" w="100%">
          <Flex justifyContent="space-between" alignItems="center" width="100%">
            <Heading as="h3" fontSize="xl" color={"brand.primary"}>
              {rank}
            </Heading>
            <Icon fontSize={"24px"}>{icon}</Icon>
          </Flex>

          <Heading as="h4" fontSize="2xl">
            worth upto{" "}
            <Text color={"brand.primary"} as={"span"}>
              ${amount}
            </Text>
          </Heading>

          <Box width="100%" height="160px" position="relative" mb={2}>
            <Image
              src={imageSrc}
              alt={amount}
              fallbackSrc="/api/placeholder/300/160"
              objectFit="contain"
              width="100%"
              height="100%"
              borderRadius="md"
            />
          </Box>

          <Text
            fontSize="xl"
            fontWeight="bold"
            color={"brand.primary"}
            textAlign={"center"}
          >
            {prizeText}
          </Text>

          <Text>{description}</Text>
        </VStack>
      </FadeInBottom>
    </Box>
  );
};

const PrizesSection = () => {
  const PRIZES = [
    {
      rank: "Winner",
      amount: "1200",
      prizeText: "Ultimate Raspberry Pi Computer* (x4)",
      description: "+ Swag bag worth of $45 from Desmos",
      icon: <FaTrophy />,
      imageSrc: FirstPrize,
    },
    {
      rank: "Runner-up",
      amount: "400",
      prizeText: "Mechanical Gaming Keyboard* (x4)",
      description: "",
      icon: <FaMedal />,
      imageSrc: SecondPrize,
    },
    {
      rank: "2nd Runner-up",
      amount: "200",
      prizeText: "Wireless Gaming Mouse* (x4)",
      description: "",
      icon: <FaAward />,
      imageSrc: ThirdPrize,
    },
    {
      rank: "Best use of AI/ML",
      amount: "300",
      prizeText: "Meta Quest MR Headset* (x2)",
      description: "",
      icon: <FaStar />,
      imageSrc: MLPrize,
    },
  ];
  return (
    <Container maxW="container.xl">
      <VStack spacing={6} align="center"></VStack>
      <Flex
        mt={8}
        gap={8}
        justify="center"
        flexWrap="wrap"
        alignItems="flex-start"
      >
        {PRIZES.map((prize, index) => (
          <PrizeCard key={index} {...prize} />
        ))}
      </Flex>
      <Text mt={4} fontSize="md" color="gray.500" textAlign="center">
        *(each participant receives one individually)
      </Text>
    </Container>
  );
};

export default PrizesSection;
