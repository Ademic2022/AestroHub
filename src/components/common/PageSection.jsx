import React from "react";
import { Box, Typography, CardMedia } from "@mui/material";
import CustomButton from "./CustomButton";

const PageSection = ({ sectionDetails, button }) => {
  const { title, subtitle, btnText, img, config, destination } = sectionDetails;
  return (
    <React.Fragment>
      <Box
        textAlign="center"
        width={{ xs: "100%", md: "65%" }}
        sx={{ margin: "0 auto", textAlign: "center" }}
      >
        <Typography
          mb={3}
          variant="h2"
          sx={{ fontSize: { xs: "46px", md: "80px" } }}
        >
          {title}
        </Typography>

        <Typography
          gutterBottom
          mb={4}
          variant="body1"
          sx={{
            px: { md: "90px" },
            fontSize: { xs: "18px", md: "22px" },
          }}
        >
          {subtitle}
        </Typography>
        {button && (
          <CustomButton to={destination} btnText={btnText} position="center" />
        )}
      </Box>

      <Box
        sx={{
          display: { md: "block", xs: "none" },
          margin: "0 auto",
          textAlign: "center",
          // width: "630.41px",
          width: "100%",
        }}
      >
        <CardMedia component="img" image={img} alt="Logo" sx={config.img} />
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
    </React.Fragment>
  );
};

export default PageSection;
