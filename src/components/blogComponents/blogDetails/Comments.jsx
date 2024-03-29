import React from "react";
import { Box, Typography, Divider, Paper, Grid, Avatar } from "@mui/material";
import { getComments } from "@/utils/apiCalls/fetchPosts";
import { getTimeDifference } from "@/utils/timeDifference";

const Comments = ({ slug }) => {
  const [comments, setComments] = React.useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const commentsData = await getComments(slug);
        setComments(commentsData);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [slug]);

  return (
    <Box my={2}>
      <Paper
        sx={{
          p: 2,
          borderRadius: 5,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography mb={1} textAlign="left">
          Comments
        </Typography>
        <Divider sx={{ mb: 2 }}>{comments.length} Comments</Divider>
        {comments.length > 0 &&
          comments.map((comment, idx) => (
            <Paper
              key={idx}
              elevation={5}
              sx={{ padding: "15px 20px", borderRadius: 5 }}
            >
              <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                  <Avatar alt={comment.name} />
                </Grid>
                <Grid justifyContent="left" item xs zeroMinWidth>
                  <Typography
                    variant="h6"
                    sx={{ textAlign: "left", marginBottom: 0 }}
                  >
                    {comment.name}
                  </Typography>
                  <Typography variant="body1" sx={{ textAlign: "left" }}>
                    {comment.comment}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      textAlign: "left",
                      color: "gray",
                      fontStyle: "italic",
                    }}
                  >
                    {getTimeDifference(comment.createdAt)}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          ))}
        {comments.length === 0 && (
          <Typography variant="body1" sx={{ textAlign: "center" }}>
            No Comment Available, be the first to comment on this post.
          </Typography>
        )}
      </Paper>
    </Box>
  );
};

export default Comments;
