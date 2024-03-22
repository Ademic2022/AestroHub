import React from "react";
import {
  Box,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  CardMedia,
} from "@mui/material";
import { FaCalendarAlt } from "react-icons/fa";

const BlogDetailsChild = () => {
  return (
    <React.Fragment>
      <Box
        width={{ xs: "100%", md: "85%" }}
        sx={{ margin: "0 auto", textAlign: "center" }}
      >
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
                sx={{ fontSize: { xs: 17, md: 22 } }}
              >
                Damilare Alabi
              </Typography>
            }
            secondary={
              <Typography
                pl={1}
                sx={{
                  textAlign: "left",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: 1,
                  fontSize: { xs: 15, md: 20 },
                  color: "grey.normal",
                }}
              >
                <span style={{ marginTop: "5px" }}>
                  <FaCalendarAlt />
                </span>
                <span>12 sep 2021</span>
              </Typography>
            }
          />
        </ListItem>
        <Typography
          my={2}
          variant="h2"
          textAlign="left"
          sx={{ fontSize: { xs: "35px", md: "80px" } }}
        >
          10 tokens that will boom in the next bull run
        </Typography>
        <CardMedia
          sx={{
            height: { xs: "300px", md: "520px" },
            borderRadius: "16px",
            objectFit: "cover",
            my: 5,
          }}
          image="/images/dashboard.webp"
          alt="Blog Img"
          title="Article Image"
        />
        <Typography my={2} variant="h2" textAlign="left" fontSize="28px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod.
        </Typography>
        <Typography variant="body1" textAlign="left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
          blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At
          risus viverra adipiscing at in tellus. Sociis natoque penatibus et
          magnis dis parturient montes. Ridiculus mus mauris vitae ultricies
          leo. Neque egestas congue quisque egestas diam. Risus in hendrerit
          gravida rutrum quisque non.
        </Typography>
        <Typography my={2} variant="h2" textAlign="left" fontSize="28px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod.
        </Typography>
        <Typography variant="body1" textAlign="left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
          blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At
          risus viverra adipiscing at in tellus. Sociis natoque penatibus et
          magnis dis parturient montes. Ridiculus mus mauris vitae ultricies
          leo. Neque egestas congue quisque egestas diam. Risus in hendrerit
          gravida rutrum quisque non.
        </Typography>
        <Typography variant="body1" textAlign="left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
          blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At
          risus viverra adipiscing at in tellus. Sociis natoque penatibus et
          magnis dis parturient montes. Ridiculus mus mauris vitae ultricies
          leo. Neque egestas congue quisque egestas diam. Risus in hendrerit
          gravida rutrum quisque non.
        </Typography>
      </Box>
    </React.Fragment>
  );
};

export default BlogDetailsChild;
