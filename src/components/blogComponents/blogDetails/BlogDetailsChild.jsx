import React from "react";
import {
  Box,
  ListItemAvatar,
  Avatar,
  Typography,
  CardMedia,
  alpha,
} from "@mui/material";
import { FaCalendarAlt } from "react-icons/fa";
import { capitalizeWords } from "@/utils/capitalizeWord";
import { formatBlogDate } from "@/utils/dateFormatter";
import CommentForm from "./CommentForm";
import Comments from "./Comments";

const BlogDetailsChild = ({ post }) => {
  const { slug, title, createdAt, content, author, featuredImage } = post;
  const formattedContent = content.html
  .replace(/<p><strong><\/strong><\/p>/g, '<br/>')
  .replace(/<p><\/p>/g, '<br/>');
  
  return (
    <React.Fragment>
      <Box
        width={{ xs: "100%", md: "85%" }}
        sx={{ margin: "0 auto", textAlign: "center" }}
      >
        <Typography
          variant="h2"
          textAlign="left"
          sx={{ fontSize: { xs: "30px", md: "70px" } }}
        >
          {title}
        </Typography>
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
          fontSize={20}
          lineHeight={1.5}
          dangerouslySetInnerHTML={{ __html: formattedContent }}
          sx={{ fontFamily: 'Roboto, sans-serif' }}
        />
        <Box
          sx={{
            height: "auto",
            width: "100%",
            bgcolor: alpha("#fff", 0.3),
            mt: 7,
            mb: 5,
            p: "0 12px 20px ",
            position: "relative",
            borderRadius: "12px",
          }}
        >
          <ListItemAvatar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "80px",
              left: "50%",
              transform: "translateX(-50%)",
              position: "absolute",
              top: -30,
            }}
          >
            <Avatar
              alt={author.name}
              src={author.photo.url}
              sx={{ height: "80px", width: "80px" }}
            />
          </ListItemAvatar>
          <Typography
            pt={7}
            variant="h2"
            textAlign="center"
            sx={{ fontSize: { xs: "30px", md: "30px" } }}
          >
            {capitalizeWords(author.name)}
          </Typography>
          <Typography
            textAlign="center"
            sx={{
              maxWidth: "100%",
              overflowWrap: "break-word",
              color: "grey.lightHover",
              fontSize: { xs: "14px", md: "18px" },
            }}
          >
            {author.bio ? author.bio : ""}
          </Typography>
        </Box>
        {/* comments */}
        <Comments slug={slug} />
        <CommentForm slug={slug} />
      </Box>
    </React.Fragment>
  );
};

export default BlogDetailsChild;
