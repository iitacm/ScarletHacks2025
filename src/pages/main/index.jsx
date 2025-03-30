import {
  Flex,
  Image,
  Text,
  Button,
  Box,
  VStack,
  Grid,
  Container,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Icon,
  Link,
  HStack,
} from "@chakra-ui/react";
import MinimalistLogo from "../../assets/ScarletHacks2025MinimalistLogo.png";
import BGLogo from "../../assets/MinimalistLogoBG.png";
import RegisterIllustration from "../../assets/Register.png";
import track1 from "../../assets/track1.png";
import track2 from "../../assets/track2.png";
import bubblr from "../../assets/bubblr.png";
import desmos from "../../assets/DesmosLogo.png";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState, useMemo } from "react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  FadeInLeft,
  FadeInBottom,
  FadeInRight,
} from "../../components/Animations";
import { useToast } from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import PrizesIllustration from "../../assets/prizes.png";
import MLLogo from "../../assets/ML-logo.png";
import { FaDiscord } from "react-icons/fa6";
import PrizesSection from "../../components/Prizes";

const ScheduleItem = ({ time, event }) => (
  <Grid
    templateColumns="1fr auto"
    gap={{ base: "12", md: "20", lg: "24" }}
    w="100%"
  >
    <Text lineHeight="26px" fontSize="2xl">
      {event}
    </Text>
    <Text lineHeight="26px" fontSize="2xl">
      {time}
    </Text>
  </Grid>
);

const DaySchedule = ({ day, date, events }) => (
  <Box w="100%">
    <Text color="brand.primary" fontSize="3xl" fontWeight={"600"}>
      DAY {day}
    </Text>
    <Text fontSize="2xl" mb={2} fontWeight={"600"}>
      {date}
    </Text>
    <VStack align="stretch" spacing={4}>
      {events.map((event, index) => (
        <ScheduleItem key={index} {...event} />
      ))}
    </VStack>
  </Box>
);

export const MainPage = () => {
  const navigate = useNavigate();
  const toast = useToast();

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

  const scheduleData = {
    day1: {
      date: "Saturday, April 5, 2025",
      events: [
        { event: "Registration and Breakfast", time: "8:00 AM" },
        { event: "Opening Ceremony", time: "10:00 AM" },
        { event: "Hacking Starts", time: "11:00 AM" },
        { event: "Lunch", time: "12:30 PM" },
        { event: "Mentoring Session", time: "3:00 PM" },
        { event: "Dinner", time: "6:00 PM" },
      ],
    },
    day2: {
      date: "Sunday, April 6, 2025",
      events: [
        { event: "Breakfast", time: "8:00 AM" },
        { event: "Hacking Ends", time: "11:00 AM" },
        { event: "Judging", time: "11:00 AM" },
        { event: "Lunch", time: "12:30 PM" },
        { event: "Closing ceremony & awards", time: "2:00 PM" },
      ],
    },
  };

  const faqData = [
    {
      question: "What is ScarletHacks?",
      answer:
        "ScarletHacks is Illinois Tech's biggest annual hackathon, uniting students from across the Chicagoland area to innovate, collaborate, and tackle real-world challenges through technology.",
    },
    {
      question: "When is ScarletHacks?",
      answer: "April 5th - 6th, 2025.",
    },
    {
      question: "What's the cost?",
      answer:
        "Admission is free and includes mentors, food, swag, resources, and so much more!",
    },
    {
      question: "Can I attend ScarletHacks virtually?",
      answer: "Unfortunately, ScarletHacks is an in-person only hackathon.",
    },
    {
      question: "Who can register?",
      answer:
        "This event is open to anyone of all skill levels - and it's all free!",
    },
    {
      question: "How many people can be on a team?",
      answer: "Between 1 and 4 people can be on a single team.",
    },
    {
      question: "Where is the event held?",
      answer:
        "The event is held in the Stuart Building at Illinois Tech campus.",
    },
  ];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    school: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here

    const templateParams = {
      user_first_name: formData.firstName,
      user_last_name: formData.lastName,
      user_email: formData.email,
      user_school: formData.school,
      user_phone: formData.phone,
      user_message: formData.message,
    };

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    console.log("Service ID:", serviceId);
    console.log("Template ID:", templateId);
    console.log("Public Key:", publicKey);

    emailjs
      .send(serviceId, templateId, templateParams, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          // Success toast
          toast({
            title: "Message sent successfully!",
            description: "We'll get back to you soon.",
            status: "success",
            duration: 2000,
            isClosable: true,
            position: "top",
          });
          setFormData({
            firstName: "",
            lastName: "",
            school: "",
            phone: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error);
          // Error toast
          toast({
            title: "Failed to send message",
            description: "Please try again later.",
            status: "error",
            duration: 2000,
            isClosable: true,
            position: "top",
          });
        }
      );
  };

  const [errors, setErrors] = useState({});

  const isFormValid = useMemo(() => {
    return (
      formData.firstName.trim() !== "" &&
      formData.lastName.trim() !== "" &&
      formData.school.trim() !== "" &&
      formData.message.trim() !== "" &&
      formData.email.trim() !== "" &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    );
  }, [
    formData.firstName,
    formData.lastName,
    formData.school,
    formData.email,
    formData.message,
  ]);

  const handleSponsorEmail = () => {
    window.location.href = "mailto:sponsor@scarlethacks.com";
  };

  const handleContactEmail = () => {
    window.location.href = "mailto:contact@scarlethacks.com";
  };

  const sponsorsData = [
    {
      image: bubblr,
      alt: "Bubblr",
      link: "https://www.drinkbubblr.com/",
    },
    {
      image: MLLogo,
      alt: "ML@IIT",
      link: "https://www.linkedin.com/company/ml-at-iit/about/",
    },
    {
      image: desmos,
      alt: "Desmos",
      link: "https://www.desmos.com/",
    },
  ];

  return (
    <Flex w="100%" flexDirection={"column"} position={"relative"}>
      {/* INFO & LOGO */}
      <Flex
        w="100%"
        flexDirection={"row"}
        justifyContent={"space-between"}
        position={"relative"}
        overflow={"hidden"}
        id="aboutSection"
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
            <Link href="https://forms.office.com/r/SngGaAkhZR" target="_blank">
              <Button
                variant={"custom"}
                letterSpacing={"1px"}
                textTransform="uppercase"
                size="lg"
                width={"200px"}
                fontSize={"xl"}
                _hover={{ bg: "red.700" }}
              >
                Register
              </Button>
            </Link>
            <HStack color={"brand.primary"} spacing={4}>
              <Link
                href="https://discord.gg/kETeAJuzbt"
                target="_blank"
                color={"brand.primary"}
                fontSize={"2xl"}
                textDecoration={"none"}
                _hover={{
                  textDecoration: "underline",
                  color: "red.700",
                  transform: "scale(1.02)",
                }}
                transition="all 0.3s ease"
                ml="5px"
              >
                Join our Discord
              </Link>
              <FaDiscord fontSize={"28px"} />
            </HStack>
          </VStack>

          <Flex
            justifyContent={"center"}
            w={"45%"}
            h={"50%"}
            flexWrap={"wrap"}
            display={{ base: "none", md: "flex" }}
            alignItems={"center"}
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
      <Image
        src={BGLogo}
        alt="ScarletHacks2025MinimalistLogo"
        position={"absolute"}
        top={{ base: "250px", md: "350px", lg: "500" }}
        left={{ base: "-120px", md: "-190px", lg: "-210px" }}
        zIndex={-1}
        opacity={0.5}
        maxW={{ base: "100px", md: "200px" }}
      />
      {/* COUNTDOWN CLOCK */}
      <FadeInBottom>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          gap={{ base: "10px", md: "25px" }}
          margin={"50px 0px 0px 0px"}
          w="100%"
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
      </FadeInBottom>
      <Image
        src={BGLogo}
        alt="ScarletHacks2025MinimalistLogo"
        maxWidth={"200px"}
        position={"absolute"}
        top={{ base: "450px", md: "550px", lg: "800" }}
        right={{ base: "-120px", md: "-180px", lg: "-220px" }}
        zIndex={-1}
        opacity={0.5}
        maxW={{ base: "100px", md: "200px" }}
      />
      {/* TRACKS */}
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        margin={"50px 0px 0px 0px"}
        gap={"20px"}
        id="tracksSection"
      >
        <FadeInBottom>
          <Text
            fontSize={"4xl"}
            fontWeight={"600"}
            color={"brand.primary"}
            textAlign={"center"}
            margin={"0"}
            textTransform={"uppercase"}
            letterSpacing={"3px"}
            w={"100%"}
          >
            Tracks
          </Text>
        </FadeInBottom>

        <FadeInLeft>
          <Flex
            flexDirection={{ base: "column", md: "row" }}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"100px"}
            w="100%"
            maxWidth={"1000px"}
            px={{ base: 8, md: 0 }}
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
              <Text
                color="brand.primary"
                fontSize="3xl"
                fontWeight={"500"}
                textAlign={"center"}
              >
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
        </FadeInLeft>

        <FadeInRight>
          <Flex
            flexDirection={{ base: "column", md: "row" }}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"20px"}
            w="100%"
            maxWidth={"1000px"}
            px={{ base: 8, md: 0 }}
          >
            <VStack
              align="flex-start"
              spacing={6}
              maxWidth={"600px"}
              alignItems={"center"}
            >
              <Text
                color="brand.primary"
                fontSize="3xl"
                fontWeight={"500"}
                textAlign={"center"}
              >
                Social Equity & Inclusion
              </Text>
              <Image
                src={track2}
                alt="social-equity-and-inclusion-image"
                maxWidth={"250px"}
                display={{ base: "block", md: "none" }}
              />
              <Text fontSize="2xl">
                This track invites participants to develop technologies and
                tools that enhance access to essential resources for underserved
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
        </FadeInRight>
      </Flex>
      {/* SCHEDULE */}
      <FadeInBottom>
        <Flex
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          margin={"50px 0px 0px 0px"}
          gap={"20px"}
          id="scheduleSection"
          w="100%"
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
            Schedule
          </Text>

          <Grid
            templateColumns={{ base: "1fr", md: "1fr 1fr" }}
            gap={{ base: "12", md: "16", lg: "24" }}
            maxWidth={"1000px"}
            w="100%"
            px={{ base: 8, md: 0 }}
          >
            <DaySchedule day="1" {...scheduleData.day1} />
            <DaySchedule day="2" {...scheduleData.day2} />
          </Grid>
        </Flex>
      </FadeInBottom>
      {/* PRIZES */}
      <FadeInBottom>
        <Flex
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          margin={"50px 0px 0px 0px"}
          gap={"20px"}
          id="prizesSection"
          w="100%"
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
            Prizes
          </Text>
          <PrizesSection />
        </Flex>
      </FadeInBottom>
      {/* /* SPONSORS  */}
      <FadeInBottom>
        <Flex
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          margin={"50px 0px 0px 0px"}
          gap={"20px"}
          id="sponsorsSection"
          w="100%"
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
            Sponsors
          </Text>
          <Flex
            wrap="wrap"
            justifyContent="center"
            gap={12}
            alignItems={"center"}
          >
            {sponsorsData.map((sponsor, index) => (
              <Link key={index} href={sponsor.link} isExternal>
                <Image
                  src={sponsor.image}
                  alt={sponsor.alt}
                  maxW={{ base: "200px", md: "300px" }}
                  transition="transform 0.3s ease-in-out"
                  _hover={{ transform: "scale(1.04)" }}
                />
              </Link>
            ))}
          </Flex>
          <Box textAlign={"center"}>
            <Text as="span" fontSize="2xl" textAlign="center" margin={"auto"}>
              Interested in being a sponsor? <br />
              Email us on{" "}
            </Text>
            <Link href="mailto:acm@iit.edu">
              <Text
                as="span"
                color={"brand.primary"}
                fontSize="2xl"
                textDecoration={"underline"}
              >
                sponsor@scarlethacks.com
              </Text>
            </Link>
          </Box>
          <Button
            variant="custom"
            letterSpacing={"1px"}
            textTransform="uppercase"
            size={"lg"}
            _hover={{ bg: "red.700" }}
            onClick={handleSponsorEmail}
            boxShadow="sm"
          >
            Become a Sponsor
          </Button>
        </Flex>
      </FadeInBottom>
      {/* CONTACT US */}
      <FadeInBottom>
        <Flex
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          margin={"50px 0px 0px 0px"}
          gap={"20px"}
          id="contactUsSection"
          w="100%"
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
            Contact us
          </Text>
          <Container maxW="1000px" py={0} textAlign={"center"}>
            {/* <Flex
              direction={{ base: "column", md: "row" }}
              gap={8}
              align="center"
            >
              <Box flex={1}>
                <Image
                  src={ContactUsIllustration2}
                  alt="Contact illustration"
                  maxW={{ base: "300px", lg: "350px", xl: "400px" }}
                  mx="auto"
                />
              </Box>

              <Box flex={2} width={{ base: "90%", md: "auto" }}>
                <form onSubmit={handleSubmit}>
                  <Grid
                    templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                    gap={6}
                    mb={6}
                  >
                    <FormControl isRequired isInvalid={errors.firstName}>
                      <Input
                        placeholder="FIRST NAME*"
                        bg="brand.tertiary"
                        size="lg"
                        borderRadius="md"
                        borderColor="brand.tertiary"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                      <FormErrorMessage>
                        First name is required
                      </FormErrorMessage>
                    </FormControl>

                    <FormControl isRequired isInvalid={errors.lastName}>
                      <Input
                        placeholder="LAST NAME*"
                        bg="brand.tertiary"
                        size="lg"
                        borderRadius="md"
                        borderColor="brand.tertiary"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                      <FormErrorMessage>Last name is required</FormErrorMessage>
                    </FormControl>
                  </Grid>

                  <FormControl isRequired isInvalid={errors.school} mb={6}>
                    <Input
                      placeholder="SCHOOL*"
                      bg="brand.tertiary"
                      size="lg"
                      borderRadius="md"
                      borderColor="brand.tertiary"
                      name="school"
                      value={formData.school}
                      onChange={handleChange}
                    />
                    <FormErrorMessage>School is required</FormErrorMessage>
                  </FormControl>

                  <Grid
                    templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                    gap={6}
                    mb={6}
                  >
                    <FormControl>
                      <Input
                        placeholder="PHONE NUMBER"
                        bg="brand.tertiary"
                        size="lg"
                        borderRadius="md"
                        borderColor="brand.tertiary"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </FormControl>

                    <FormControl isRequired isInvalid={errors.email}>
                      <Input
                        placeholder="EMAIL*"
                        type="email"
                        bg="brand.tertiary"
                        size="lg"
                        borderRadius="md"
                        borderColor="brand.tertiary"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      <FormErrorMessage>
                        Valid email is required
                      </FormErrorMessage>
                    </FormControl>
                  </Grid>

                  <FormControl isRequired isInvalid={errors.message} mb={6}>
                    <Textarea
                      placeholder="MESSAGE*"
                      bg="brand.tertiary"
                      size="lg"
                      borderRadius="md"
                      rows={6}
                      borderColor="brand.tertiary"
                      minHeight={"150px"}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                    <FormErrorMessage>Message is required</FormErrorMessage>
                  </FormControl>

                  <Button
                    variant={"custom"}
                    type="submit"
                    w="100%"
                    bg="brand.primary"
                    color="white"
                    size="lg"
                    _hover={{ bg: "red.700" }}
                    isDisabled={!isFormValid}
                  >
                    SUBMIT
                  </Button>
                </form>
              </Box>
            </Flex> */}
            <Box textAlign={"center"}>
              <Text as="span" fontSize="2xl" textAlign="center" margin={"auto"}>
                Got questions? We've got answers! <br />
                Reach out to us at{" "}
              </Text>
              <Link href="mailto:acm@iit.edu">
                <Text
                  as="span"
                  color={"brand.primary"}
                  fontSize="2xl"
                  textDecoration={"underline"}
                >
                  contact@scarlethacks.com
                </Text>
              </Link>
            </Box>
            <Button
              variant="custom"
              letterSpacing={"1px"}
              textTransform="uppercase"
              size={"lg"}
              _hover={{ bg: "red.700" }}
              onClick={handleContactEmail}
              mt="20px"
              boxShadow="sm"
            >
              Contact Us
            </Button>
          </Container>
        </Flex>
      </FadeInBottom>
      {/* FAQ */}
      <FadeInBottom>
        <Flex
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          margin={"50px 0px 0px 0px"}
          gap={"20px"}
          id="faqsSection"
          w="100%"
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
            FAQs
          </Text>
          <Container maxW="1000px" px={{ base: 8, md: 0 }}>
            <Accordion allowToggle>
              {faqData.map((faq, index) => (
                <AccordionItem key={index} border="none">
                  {({ isExpanded }) => (
                    <>
                      <AccordionButton
                        p={4}
                        _hover={{ bg: "transparent" }}
                        _expanded={{ bg: "transparent" }}
                      >
                        <Box flex="1" textAlign="left">
                          <Text fontSize="2xl" fontWeight="medium">
                            {faq.question}
                          </Text>
                        </Box>
                        <Icon
                          as={isExpanded ? MinusIcon : AddIcon}
                          fontSize="20px"
                        />
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        <Text fontSize="xl">{faq.answer}</Text>
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </Container>
        </Flex>
      </FadeInBottom>
      {/* REGISTER */}
      <FadeInBottom>
        <Flex
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          margin={"50px 0px"}
          gap={"20px"}
          w="100%"
        >
          <Container maxW="1000px" px={{ base: 10, md: 4 }}>
            <Flex
              direction={{ base: "column-reverse", md: "row" }}
              align="center"
              justify="space-between"
              gap={8}
            >
              <Box maxW="550px">
                <Text fontSize="2xl" mb={4}>
                  Don't miss out on Illinois Tech's biggest hackathon, unleash
                  your creativity and make an impact!
                </Text>
                <Text fontSize="2xl" mb={6}>
                  Register now if you haven't already!
                </Text>
                <Link
                  href="https://forms.office.com/r/SngGaAkhZR"
                  target="_blank"
                >
                  <Button
                    variant={"custom"}
                    size="lg"
                    bg="brand.primary"
                    color="white"
                    _hover={{ bg: "red.700" }}
                    w="100%"
                    letterSpacing={"1px"}
                    textTransform="uppercase"
                  >
                    Register
                  </Button>
                </Link>
              </Box>
              <Image
                src={RegisterIllustration}
                alt="People walking"
                maxW={{ base: "300px", md: "350px" }}
              />
            </Flex>
          </Container>
        </Flex>
      </FadeInBottom>
    </Flex>
  );
};
