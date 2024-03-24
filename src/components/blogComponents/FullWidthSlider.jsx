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
import { truncateContent } from "@/utils/postTruncator";
import { capitalizeWords } from "@/utils/capitalizeWord";
import { formatBlogDate } from "@/utils/dateFormatter";

const FullWidthSlider = ({ latestPost }) => {
  const { slug, title, createdAt, content, author, featuredImage } = latestPost;
  const truncatedSummary = truncateContent(content.html, 25);
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
              image="/icons/Saturn.webp"
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
            image={featuredImage.url}
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
                  {title}
                </Typography>
                <Typography
                  variant="body2"
                  textAlign="left"
                  sx={{
                    color: "grey.lightActive",
                    fontSize: { xs: "15px", md: "20px" },
                  }}
                >
                  {truncatedSummary}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} mt={{ xs: 1, md: 4 }}>
                <ListItem alignItems="center">
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src={author.photo.url}
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
                        {capitalizeWords(author.name)}
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
                          color: "grey.lightActive",
                        }}
                      >
                        <span style={{ marginTop: "5px" }}>
                          <FaCalendarAlt />
                        </span>
                        <span>{formatBlogDate(createdAt)}</span>
                      </Typography>
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
