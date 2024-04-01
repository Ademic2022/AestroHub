import React from "react";
import { Box, Typography, CardMedia, Grid, Chip } from "@mui/material";
import CustomButton from "../common/CustomButton";
import ScrollReveal from "@/utils/motion/ScrollReveal";

const Services = ({ service, button, type }) => {
  return (
    <Box
      sx={{
        display: "flex",
        p: "25px",
        border: "1px solid #5c5c5c",
        borderRadius: "40px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <ScrollReveal type={type}>
        <Box
          sx={{
            backgroundImage: `url(${service.bgImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "1233px",
            borderRadius: "40px",
            border: "1.5px solid #5c5c5c",
            p: "25px",
          }}
        >
          <Grid
            container
            spacing={2}
            m={0}
            justifyContent="center"
            alignItems="center"
            height="100%"
          >
            <Grid item xs={6} container>
              <Box
                sx={{
                  width: "520px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Chip
                  sx={{
                    bgcolor: "#fff",
                    fontSize: "18px",
                    fontFamily: "Outfit",
                    color: "#0EAD69",
                    width: 45,
                    mb: "20px",
                  }}
                  label={service.id}
                />
                <Typography
                  mb={3}
                  textAlign="left"
                  variant="h2"
                  sx={{
                    fontSize: { xs: "56px", md: "56px" },
                    fontWeight: 600,
                  }}
                >
                  {service.title}
                </Typography>
                <Typography
                  mb={3}
                  variant="body2"
                  textAlign="justify"
                  sx={{
                    fontSize: { xs: "56px", md: "22px" },
                    fontWeight: 400,
                  }}
                >
                  {service.description}
                </Typography>
                {button && (
                  <CustomButton
                    btnText={service.btnText}
                    to={service.destination}
                  />
                )}
              </Box>
            </Grid>
            <Grid>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "459px",
                  height: "550px",
                  p: "25px",
                  bgcolor: "#fff",
                  borderRadius: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  image="/images/image2.webp"
                  sx={{
                    width: "407px",
                    height: "100%",
                    borderRadius: "16px",
                  }}
                  alt="icon"
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </ScrollReveal>
    </Box>
  );
};

export default Services;
