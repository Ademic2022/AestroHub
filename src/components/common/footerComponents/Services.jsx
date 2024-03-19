import React from "react";
import { Box, Typography, CardMedia, Chip } from "@mui/material";
import { services } from "@/data/services";

const Services = () => {
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
      {services.map((service) => (
        <Typography
          key={service.id}
          mb={3}
          variant="body"
          sx={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: { xs: "20px", md: "28px" },
            color: "grey.lightActive",
          }}
        >
          {service.title}
        </Typography>
      ))}
    </Box>
  );
};

export default Services;
