import React from "react";
import { alpha } from "@mui/system";
import { Box, Grid, Typography, CardMedia } from "@mui/material";

const AboutCard = ({ datas }) => {
  return (
    <Box width={{ md: 1280 }} sx={{ margin: "0 auto", textAlign: "center" }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 8, md: 12 }}
      >
        {datas.map((project) => (
          <Grid item xs={2} sm={4} md={6} key={project.id}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                p: { xs: 1, md: 8 },
                flexDirection: "column",
                bgcolor: alpha("#fff", 0.1),
                height: "412px",
                borderRadius: "20px",
                border: "1px solid #5c5c5c",
              }}
            >
              <CardMedia
                component="img"
                image={project.icon}
                sx={{
                  width: "40px",
                  height: "40px",
                  objectFit: "contain",
                  mb: 2,
                }}
                alt="icon"
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  bgcolor: alpha("#fff", 0.4),
                  p: 1,
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                }}
              >
                <Typography
                  variant="body"
                  sx={{ fontSize: { xs: "10px", md: "20px", bgcolor: "#fff" } }}
                >
                  {`0${project.id}`}
                </Typography>
              </Box>
              <Typography
                my={{ xs: 1, md: 4 }}
                variant="body"
                sx={{ fontSize: { xs: "32px", md: "56px" } }}
              >
                {project.title}
              </Typography>
              <Typography
                my={2}
                variant="body2"
                sx={{
                  fontSize: { xs: "18px", md: "22px", textAlign: "left" },
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
  );
};

export default AboutCard;
