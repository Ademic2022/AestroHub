import { Box } from "@mui/material";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

const Reveal = ({ children, y, transition }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
    // else {
    //   mainControls.start("hidden");
    // }
  }, [isInView, mainControls]);
  return (
    <Box ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: y ? y : 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={transition ? transition : { duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </Box>
  );
};

export default Reveal;
