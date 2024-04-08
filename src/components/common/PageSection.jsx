import React, { useState } from "react";
import { Box, Typography, CardMedia } from "@mui/material";
import CustomButton from "./CustomButton";
import Reveal from "@/utils/motion/Reveal";
import { splitStrings } from "@/utils/motion/splitStrings";
import { motion } from "framer-motion";
import ScrollReveal from "@/utils/motion/ScrollReveal";

const PageSection = ({ sectionDetails, button }) => {
  const { title, subtitle, btnText, img, config, destination } = sectionDetails;
  const subtitles = splitStrings(subtitle);
  const [staggered, setStaggered] = useState(false);

  const charVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  };

  const handleStagger = () => {
    if (!staggered) {
      setStaggered(true); // Set staggering to true only once
    }
  };

  return (
    <React.Fragment>
      <ScrollReveal type="first">
        <Box
          textAlign="center"
          width={{ xs: "100%", md: "65%" }}
          sx={{ margin: "0 auto", textAlign: "center" }}
        >
          <Reveal>
            <Typography
              mb={3}
              variant="h2"
              sx={{ fontSize: { xs: "46px", md: "80px" } }}
            >
              {title}
            </Typography>
          </Reveal>
          <motion.div
            initial="hidden"
            whileInView={staggered ? false : "reveal"} // Only stagger if not already staggered
            transition={{ staggerChildren: 0.01 }}
            onAnimationComplete={handleStagger} // Callback to set staggering to true after first animation
          >
            <Typography
              gutterBottom
              mb={4}
              variant="body1"
              style={{
                padding: { md: " 0 90px" },
                fontSize: { xs: "18px", md: "22px" },
                color: "grey.lighHover",
              }}
            >
              {subtitles.map((char, idx) => (
                <motion.span
                  key={idx}
                  transition={{ duration: 0.5 }}
                  variants={charVariants}
                >
                  {char}
                </motion.span>
              ))}
            </Typography>
          </motion.div>
          {button && (
            <CustomButton
              to={destination}
              btnText={btnText}
              position="center"
            />
          )}
        </Box>

        <Box
          sx={{
            display: { md: "block", xs: "none" },
            margin: "15px auto",
            textAlign: "center",
            width: "100%",
          }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
            style={{
              width: config.imgwidth ? config.imgwidth : "650px",
              margin: "0 auto",
            }}
          >
            <CardMedia component="img" image={img} alt="Logo" sx={config.img} />
          </motion.div>
        </Box>

        {/* mobile display */}
        <Box sx={{ display: { md: "none", xs: "block" } }}>
          <CardMedia
            component="img"
            image={img}
            alt="Logo"
            sx={{
              my: 5,
              objectFit: "cover",
              transform: config.img.transform ? config.img.transform : "",
            }}
          />
        </Box>
      </ScrollReveal>
    </React.Fragment>
  );
};

export default PageSection;
