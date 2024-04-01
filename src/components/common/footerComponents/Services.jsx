import React from "react";
import { Box, Typography, CardMedia, Chip } from "@mui/material";
import { services } from "@/data/services";
import { motion } from "framer-motion";

const Services = () => {
  const fadeInAnimationVariant = {
    initial: { opacity: 0, y: 100 },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.05 * index },
    }),
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <Chip
        sx={{
          bgcolor: "#fff",
          fontSize: "18px",
          fontFamily: "Outfit",
          color: "#0EAD69",
          padding: "5px 10px",
          mb: "20px",
        }}
        label="What we do"
      />
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          initial="initial"
          variants={fadeInAnimationVariant}
          whileInView="animate"
          custom={index}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "25px",
            color: "grey.lightActive",
            lineHeight: "43.75px",
          }}
        >
          <Typography variant="body">{service.title}</Typography>
        </motion.div>
      ))}
    </Box>
  );
};

export default Services;
