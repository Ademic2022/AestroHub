import React from "react";
import { Box, Typography, Chip, CardMedia } from "@mui/material";
import AboutCard1 from "../common/AboutCard1";
import { team } from "../../data/aboutUs";

const Team = () => {
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
            color: "#0EAD69",
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
          label="The brains  behind Aestrohub"
        />
        <Typography
          mb={3}
          variant="h2"
          sx={{ fontSize: { xs: "32px", md: "56px" } }}
        >
          The Team
        </Typography>
      </Box>
      <AboutCard1 animationDirection="first" cardHeight="455px" datas={team} />
    </React.Fragment>
  );
};

export default Team;
