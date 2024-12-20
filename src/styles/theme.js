import { extendTheme } from "@chakra-ui/react";
import { config } from "./config";

const theme = extendTheme({
  colors: {
    brand: {
      primary: "#CC0000",
      secondary: "#F9F8F4",
      tertiary: "#F2E8CF",
      text: "#000000",
    },
  },
  components: {
    Button: {
      variants: {
        custom: {
          bg: "brand.primary",
          color: "brand.secondary",
          _hover: {
            bg: "brand.primary.500",
          },
        },
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: "brand.secondary",
        color: "brand.text",
      },
    },
  },
  config,
});

export default theme;
