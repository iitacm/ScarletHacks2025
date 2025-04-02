import { Box, AspectRatio } from "@chakra-ui/react";

export const Map = () => {
  return (
    <Box
      w="100%"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      h={{ base: "500px", lg: "650px" }}
    >
      <AspectRatio ratio={16 / 9} minH={{ base: "500px", lg: "650px" }}>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/d/embed?mid=1PuV4PGCaHU8tkdMqFLkXbJpdR0cmWSQ&ehbc=2E312F"
          loading="lazy"
          style={{ border: 0 }}
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </AspectRatio>
    </Box>
  );
};
