import React from "react";
import { alpha } from "@mui/system";
import { Box, Grid, Typography, CardMedia } from "@mui/material";
import ScrollReveal from "@/utils/motion/ScrollReveal";

const AboutCard1 = ({ cardHeight, datas, animationDirection }) => {
  return (
    <Box sx={{ margin: "0 auto", textAlign: "center" }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 8, md: 12 }}
      >
        {datas.map((project, idx) => (
          <Grid item xs={2} sm={4} md={4} key={project.id}>
            <ScrollReveal type={animationDirection} index={idx}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  bgcolor: alpha("#fff", 0.1),
                  height: cardHeight ? cardHeight : "412px",
                  borderRadius: "20px",
                  border: "1px solid #5c5c5c",
                }}
              >
                <CardMedia
                  component="img"
                  image={project.img}
                  sx={{
                    borderRadius: "50%",
                    width: "120px",
                    height: "120px",
                    objectFit: "contain",
                  }}
                  alt="icon"
                />
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
            </ScrollReveal>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AboutCard1;
