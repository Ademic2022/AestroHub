import { Box } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const ScrollReveal = ({ children, type, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  //default and custom variants
  const defaultVariants = {
    hidden: {
      opacity: 0,
      x: type === "first" ? -100 : 100,
    },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  const customVariants = {
    hidden: {
      opacity: 0,
      x: type === "first" ? -100 : 100,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, delay: index * 0.2 },
    },
  };

  // default variants if index is not provided, otherwise use custom variants
  const selectedVariants = index ? customVariants : defaultVariants;

  return (
    <Box ref={ref}>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={selectedVariants}
      >
        {children}
      </motion.div>
    </Box>
  );
};

export default ScrollReveal;
