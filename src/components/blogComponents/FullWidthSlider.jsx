import React from "react";
import {
  Box,
  Chip,
  alpha,
  Grid,
  CardMedia,
  Typography,
  ListItem,
  Avatar,
  ListItemText,
  ListItemAvatar,
} from "@mui/material";
import { FaCalendarAlt } from "react-icons/fa";

const FullWidthSlider = () => {
  return (
    <React.Fragment>
      <Box
        width={{ xs: "100%", md: "65%" }}
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
              image="/icons/Saturn.png"
              sx={{
                width: 24,
                height: 24,
                objectFit: "contain",
              }}
              alt="icon"
            />
          }
          label="AestroBlog"
        />
        <Typography
          mb={3}
          variant="h2"
          sx={{ fontSize: { xs: "32px", md: "56px" } }}
        >
          Read our latest Articles
        </Typography>
      </Box>
      <Box
        sx={{
          maxWidth: "1280px",
          mx: "auto",
          p: { xs: 1, md: 4 },
          //   height: "775px",
          border: "1px solid #5c5c5c",
          borderRadius: "30px",
          bgcolor: alpha("#fff", 0.1),
        }}
      >
        <Box>
          <CardMedia
            sx={{
              height: { xs: "300px", md: "429px" },
              borderRadius: "16px",
              objectFit: "contain",
            }}
            image="images/dashboard.png"
            title="Article Image"
          />
          <Box>
            <Grid
              container
              direction={{ xs: "column-reverse", md: "row" }}
              spacing={2}
            >
              <Grid
                container
                item
                xs={12}
                md={6}
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <Typography
                  variant="body2"
                  gutterBottom
                  my={2}
                  sx={{
                    fontSize: { xs: "16px", md: "20px" },
                    color: "grey.lightActive",
                  }}
                >
                  Web3
                </Typography>
                <Typography
                  gutterBottom
                  variant="customBody"
                  textAlign="left"
                  sx={{ fontSize: { xs: "32", md: "36px" } }}
                >
                  Design tips for designers that cover everything you need
                </Typography>
                <Typography
                  variant="body2"
                  textAlign="left"
                  sx={{
                    color: "grey.lightActive",
                    fontSize: { xs: "15px", md: "20px" },
                  }}
                >
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} mt={{ xs: 1, md: 4 }}>
                <ListItem alignItems="center">
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src="/avatars/male.jpeg"
                      sx={{ height: "80px", width: "80px" }}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    sx={{ pl: 3 }}
                    primary={
                      <Typography
                        variant="customBody"
                        color="#fff"
                        textAlign="left"
                      >
                        Damilare Alabi
                      </Typography>
                    }
                    secondary={
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          color: "grey.lightActive",
                        }}
                      >
                        <FaCalendarAlt />
                        <Typography
                          pl={1}
                          sx={{
                            fontSize: { xs: 15, md: 20 },
                            color: "grey.lightActive",
                          }}
                        >
                          12 sep 2021
                        </Typography>
                      </Box>
                    }
                  />
                </ListItem>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default FullWidthSlider;
