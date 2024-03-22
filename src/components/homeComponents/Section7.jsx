import React from "react";
import { Box, Typography, CardMedia } from "@mui/material";
import CustomButton from "../common/CustomButton";

const Section7 = ({ title, bgcolor, bottomText }) => {
  return (
    <React.Fragment>
      <Box
        display="flex"
        alignItems="center"
        gap={4}
        p={2}
        width={{ xs: "max-width", md: "1280px" }}
        sx={{
          // height: "160px",
          bgcolor: bgcolor ? bgcolor : "#FF006E",
          borderRadius: "24px",
          overflowX: "auto",
          margin: "45px auto",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <CardMedia
            component="img"
            image="/icons/Mars.webp"
            alt="Logo"
            sx={{
              width: { xs: "40px", md: "130px" },
              pl: { xs: "0", md: "30px" },
            }}
          />

          <Typography
            variant="h2"
            width={{ xs: "100%", md: "60%" }}
            sx={{ fontSize: { xs: 10, md: 44 } }}
          >
            {title ? title : ".... Made by you, delivered by us ...."}
          </Typography>
          <CardMedia
            component="img"
            image="/icons/Saturn.webp"
            alt="Logo"
            sx={{
              width: { xs: "50px", md: "150px" },
              pr: { xs: "0", md: "30px" },
            }}
          />
        </Box>
      </Box>
      {bottomText && (
        <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
          <Typography
            variant="body2"
            width={{ xs: "90%", md: "45%" }}
            color="#9898A8"
          >
            AestroPad provides access to different potential investors for your
            project. Embrace the dynamic system of funding across different
            channels.
          </Typography>
        </Box>
      )}

      <CustomButton
        to="/services"
        btnText="Explore our station"
        position="center"
      />
    </React.Fragment>
  );
};

export default Section7;
