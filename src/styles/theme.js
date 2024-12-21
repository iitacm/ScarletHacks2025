import { extendTheme, useSizes } from "@chakra-ui/react";
import { config } from "./config";

const theme = extendTheme({
  colors: {
    brand: {
      primary: "#CC0000",
      secondary: "#F2E8CF",
      tertiary: "#D9D9D9",
      background: "#F9F8F4",
      text: "#000000",
    },
  },
  components: {
    Button: {
      variants: {
        custom: {
          bg: "brand.primary",
          color: "brand.background",
          _hover: {
            bg: "brand.primary.500",
          },
          borderRadius: "5px",
          padding: "10px 35px",
          letterSpacing: "2px",
          fontWeight: "700",
        },
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: "brand.background",
        color: "brand.text",
      },
    },
  },
  config,
});

export default theme;
