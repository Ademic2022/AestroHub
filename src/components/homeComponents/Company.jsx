import React from "react";
import { Box, Typography, CardMedia } from "@mui/material";
import Marquee from "react-marquee-slider";
import { companies } from "@/data/companies";

const Company = () => {
  return (
    <React.Fragment>
      <Box
        textAlign="center"
        width={{ xs: "100%", md: "65%" }}
        sx={{ margin: "40px auto", textAlign: "center" }}
      >
        <Typography variant="h2" sx={{ fontSize: { xs: "32px", md: "56px" } }}>
          Companies in our Space
        </Typography>
      </Box>
      <Box
        display={{ xs: "none", md: "flex" }}
        alignItems="center"
        gap={4}
        p={2}
        width="1280px"
        sx={{
          height: "160px",
          bgcolor: "#0EAD69",
          borderRadius: "24px",
          overflowX: "auto",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <Marquee velocity={12} direction="rtl">
          {companies.map((company) => (
            <Box
              key={company.id}
              sx={{ display: "flex", alignItems: "center" }}
              mr={3}
            >
              <Typography variant="body" mr={3}>
                {company.name}
              </Typography>
              <CardMedia component="img" image={company.logo} alt="Logo" />
            </Box>
          ))}
        </Marquee>
      </Box>
      {/* mobile view */}
      <Box
        display={{ xs: "flex", md: "none" }}
        alignItems="center"
        justifyContent="center"
      >
        <Box
          display={{ xs: "flex", md: "none" }}
          alignItems="center"
          flexDirection="column"
          gap={4}
          py={2}
          width="390px"
          sx={{
            height: "320px",
            bgcolor: "#0EAD69",
            borderRadius: "24px",
            overflowY: "auto",
          }}
        >
          {companies.map((company) => (
            <Box
              key={company.id}
              sx={{
                display: "flex",
                alignItems: "center",
                width: "90%",
                height: "68.58px",
              }}
            >
              <CardMedia
                component="img"
                image={company.logo}
                alt="Logo"
                sx={{
                  width: "68.58px",
                  height: "68.58px",
                  objectFit: "contain",
                }}
              />
              <Typography variant="body" sx={{ fontSize: "20.5px", ml: 2 }}>
                {company.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Company;
