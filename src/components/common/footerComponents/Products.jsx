import React from "react";
import { Box, Typography, CardMedia, Chip } from "@mui/material";
import { products } from "../../../data/footer";

const Products = () => {
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
          color: "#FF006E",
          padding: "5px 10px",
          mb: "20px",
        }}
        label="Our Products"
      />
      {products.map((product) => (
        <Typography
          key={product.id}
          mb={3}
          variant="body"
          sx={{
            fontSize: { xs: "20px", md: "28px" },
            textAlign: "left",
            color: "grey.lightActive",
          }}
        >
          {product.title}
        </Typography>
      ))}
    </Box>
  );
};

export default Products;
