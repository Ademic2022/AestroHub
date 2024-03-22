import React from "react";
import { Box, Typography, Chip, CardMedia } from "@mui/material";
import Card from "../common/Card";
import { whyUs } from "../../data/aboutUs";

const WhyUs = () => {
  return (
    <React.Fragment>
      <Box
        width={{ md: 1280 }}
        sx={{ margin: "100px auto 5px", textAlign: "center" }}
      >
        <Chip
          sx={{
            bgcolor: "#fff",
            fontSize: "18px",
            fontFamily: "Outfit",
            color: "#FF006E",
            padding: "5px",
            mb: "20px",
          }}
          icon={
            <CardMedia
              component="img"
              image="/icons/Saturn.webp"
              sx={{
                width: 24,
                height: 24,
                objectFit: "contain",
              }}
              alt="icon"
            />
          }
          label="Why Us"
        />
        <Typography
          mb={3}
          variant="h2"
          sx={{ fontSize: { xs: "32px", md: "56px" } }}
        >
          Why you should choose us
        </Typography>
      </Box>
      <Card datas={whyUs} />
    </React.Fragment>
  );
};

export default WhyUs;
