import React from "react";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

const Custom404 = () => {
  return (
    <React.Fragment>
      <Box
        mt={5}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h1">404 - Page Not Found</Typography>
        <Typography variant="body">
          The page you are looking for does not exist.
        </Typography>
        <Box component={Link} href="/" m={5}>
          Go back to home
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Custom404;
