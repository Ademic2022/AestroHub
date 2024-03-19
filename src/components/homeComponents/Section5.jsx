import React from "react";
import { Box, Typography, CardMedia, Chip, Grid } from "@mui/material";
import { alpha } from "@mui/system";
import { projects } from "@/data/projects";

const Section5 = () => {
  return (
    <React.Fragment>
      <Box
        textAlign="center"
        width={{ xs: "100%", md: "65%", margin: "0 auto", textAlign: "center" }}
        mt={15}
        mb={5}
      >
        <Chip
          sx={{
            bgcolor: "#fff",
            fontSize: "18px",
            fontFamily: "Outfit",
            color: "#3772FF",
            padding: "5px",
            mb: "20px",
          }}
          icon={
            <CardMedia
              component="img"
              image="/icons/Saturn.png"
              sx={{
                width: 24,
                height: 24,
                objectFit: "contain",
              }}
              alt="icon"
            />
          }
          label="What we Offer"
        />
        <Typography
          mb={3}
          variant="h2"
          sx={{ fontSize: { xs: "32px", md: "56px" } }}
        >
          Our Range of Projects
        </Typography>
      </Box>
      <Box width={{ md: 1280 }} sx={{ margin: "0 auto", textAlign: "center" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 1, sm: 8, md: 12 }}
        >
          {projects.map((project) => (
            <Grid item xs={2} sm={4} md={4} key={project.id}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  bgcolor: alpha("#fff", 0.1),
                  height: "412px",
                  borderRadius: "20px",
                  border: "1px solid #5c5c5c",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "153px",
                    height: "153px",
                    bgcolor: alpha("#fff", 0.3),
                    borderRadius: "50%",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={project.img}
                    sx={{ width: "90px", height: "90px" }}
                    alt="icon"
                  />
                </Box>
                <Typography
                  my={2}
                  variant="body"
                  sx={{ fontSize: { xs: "15px", md: "25px" } }}
                >
                  {project.title}
                </Typography>
                <Typography
                  my={2}
                  px={5}
                  variant="body2"
                  sx={{
                    fontSize: { xs: "15px", md: "18px" },
                    color: "#D0D0D0",
                  }}
                >
                  {project.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Section5;
