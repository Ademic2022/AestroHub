import React from "react";
import { Box, Typography, Chip } from "@mui/material";
import { products } from "@/data/footer";
import { motion } from "framer-motion";

const Products = () => {
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
        mt: 5,
      }}
    >
      <Chip
        sx={{
          bgcolor: "#fff",
          fontSize: "18px",
          fontFamily: "Outfit",
          color: "#FF006E",
          padding: "5px 10px",
          mb: "20px",
        }}
        label="Our Products"
      />
      {products.map((product, index) => (
        <motion.div
          key={product.id}
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
          <Typography variant="body">{product.title}</Typography>
        </motion.div>
      ))}
    </Box>
  );
};

export default Products;
