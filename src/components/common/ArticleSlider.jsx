import React from "react";
import {
  Box,
  Button,
  Typography,
  CardActions,
  CardMedia,
  Chip,
  CardContent,
  Card,
} from "@mui/material";
import { alpha } from "@mui/system";
import { FaUserTie } from "react-icons/fa6";
import "react-multi-carousel/lib/styles.css";
import { FaCalendarAlt } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import Link from "next/link";
import { responsive } from "@/data/CarouselResponsive";
import { truncateContent } from "@/utils/postTruncator";
import { capitalizeWords } from "@/utils/capitalizeWord";
import { formatBlogDate } from "@/utils/dateFormatter";

const ArticleSlider = ({ articles, props }) => {
  return (
    <React.Fragment>
      <Box
        width={{ xs: "100%", md: "65%" }}
        mt={15}
        sx={{ margin: "100px auto 5px", textAlign: "center" }}
        mb={5}
      >
        <Chip
          sx={{
            bgcolor: "#fff",
            fontSize: "18px",
            fontFamily: "Outfit",
            color: props.color,
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
          label={props.label}
        />
        <Typography
          mb={3}
          variant="h2"
          sx={{ fontSize: { xs: "32px", md: "56px" } }}
        >
          {props.sectionHeader}
        </Typography>
      </Box>
      <Box sx={{ maxWidth: "1280px", mx: "auto" }}>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
        >
          {articles.map((article, index) => {
            const { slug, title, createdAt, content, author, featuredImage } =
              article;
            const truncatedSummary = truncateContent(content.html);

            return (
              <Card
                key={index}
                sx={{
                  m: 1,
                  p: 1,
                  bgcolor: alpha("#fff", 0.1),
                  border: "1px solid #5c5c5c",
                  borderRadius: "16px",
                  maxHeight: "580px",
                }}
              >
                <CardMedia
                  sx={{
                    height: { xs: "218px", md: "318px" },
                    borderRadius: "16px",
                  }}
                  image={featuredImage.url}
                  title="Article Image"
                />
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <FaUserTie />
                      <Typography
                        pl={1}
                        sx={{ fontSize: { xs: "12px", md: "18px" } }}
                      >
                        {capitalizeWords(author.name)}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <FaCalendarAlt />
                      <Typography pl={1} sx={{ fontSize: { xs: 10, md: 16 } }}>
                        {formatBlogDate(createdAt)}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography
                    pt={{ xs: 0.5, md: 3 }}
                    textAlign="left"
                    gutterBottom
                    variant="body"
                    component="div"
                    sx={{ fontSize: { xs: 18, md: 22 } }}
                  >
                    {title}
                  </Typography>
                  <Typography
                    variant="body2"
                    textAlign="left"
                    color="#D0D0D0"
                    sx={{ fontSize: { xs: 14, md: 18 } }}
                  >
                    {truncatedSummary}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="filled"
                    component={Link}
                    href={`/blog/${slug}/`}
                    passHref
                    sx={{
                      bgcolor: "#0EAD69",
                      borderRadius: "16px",
                      color: "#fff",
                    }}
                  >
                    Read More
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </Carousel>
      </Box>
    </React.Fragment>
  );
};

export default ArticleSlider;
