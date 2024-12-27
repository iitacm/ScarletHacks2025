import { motion } from "framer-motion";
import { chakra } from "@chakra-ui/react";

// Create a motion-enabled div with Chakra UI
const MotionFlex = chakra(motion.div, {
  baseStyle: {
    display: "flex",
  },
});

export const FadeInBottom = ({ children }) => {
  return (
    <MotionFlex
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 1.2, // Increased duration
        ease: "easeInOut", // Smoother easing
        delay: 0.5, // Optional delay
      }}
      w="100%"
    >
      {children}
    </MotionFlex>
  );
};

// Slower fade-in animation from left
export const FadeInLeft = ({ children }) => (
  <MotionFlex
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 2.5,
      ease: [0.43, 0.13, 0.23, 0.96], // Custom easing
      delay: 0.001,
    }}
  >
    {children}
  </MotionFlex>
);

// Slower fade-in animation from right
export const FadeInRight = ({ children }) => (
  <MotionFlex
    initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 1.2,
      ease: "easeInOut",
      delay: 0.5,
    }}
  >
    {children}
  </MotionFlex>
);

// Fade in from top
export const FadeInTop = ({ children }) => (
  <MotionFlex
    initial={{ opacity: 0, y: -100 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 3.5, // Increased to 3.5 seconds
      ease: [0.25, 0.1, 0.25, 1], // Smoother cubic-bezier curve
      delay: 0.5, // Increased delay
    }}
    w="100%"
  >
    {children}
  </MotionFlex>
);

// Scale fade in
export const ScaleFade = ({ children }) => (
  <MotionFlex
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{
      duration: 1.2,
      ease: "easeInOut",
    }}
  >
    {children}
  </MotionFlex>
);

// Rotate fade in
export const RotateFade = ({ children }) => (
  <MotionFlex
    initial={{ opacity: 0, rotate: -10 }}
    whileInView={{ opacity: 1, rotate: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 1.2,
      ease: "easeInOut",
    }}
  >
    {children}
  </MotionFlex>
);
