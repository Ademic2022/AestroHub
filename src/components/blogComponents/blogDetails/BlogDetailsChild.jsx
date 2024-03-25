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
import { capitalizeWords } from "@/utils/capitalizeWord";
import { formatBlogDate } from "@/utils/dateFormatter";

const BlogDetailsChild = ({ post }) => {
  const { slug, title, createdAt, content, author, featuredImage } = post;
  return (
    <React.Fragment>
      <Box
        width={{ xs: "100%", md: "85%" }}
        sx={{ margin: "0 auto", textAlign: "center" }}
      >
        <ListItem alignItems="center">
          <ListItemAvatar>
            <Avatar
              alt={author.name}
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
                sx={{
                  textAlign: "left",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: 1,
                  fontSize: { xs: 14, md: 20 },
                  color: "grey.normal",
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
        <Typography
          my={2}
          variant="h2"
          textAlign="left"
          sx={{ fontSize: { xs: "30px", md: "70px" } }}
        >
          {title}
        </Typography>
        <CardMedia
          sx={{
            height: { xs: "250px", md: "520px" },
            borderRadius: "16px",
            objectFit: "cover",
            my: 3,
          }}
          image={featuredImage.url}
          alt="Blog Img"
          title="Article Image"
        />
        <Box
          component="div"
          textAlign="left"
          color="#fff"
          // fontSize={23}
          lineHeight={1.5}
          dangerouslySetInnerHTML={{ __html: content.html }}
        />
      </Box>
    </React.Fragment>
  );
};

export default BlogDetailsChild;
