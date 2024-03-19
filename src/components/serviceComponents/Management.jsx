import React from "react";
import { Box, Typography } from "@mui/material";
import Card from "../common/Card";
import { managements } from "@/data/services";

const Management = () => {
  return (
    <React.Fragment>
      <Box
        textAlign="center"
        width={{ xs: "100%", md: "65%", margin: "0 auto", textAlign: "center" }}
        mt={15}
        mb={5}
      >
        <Typography
          mb={3}
          variant="h2"
          sx={{ fontSize: { xs: "32px", md: "56px" } }}
        >
          Management
        </Typography>
      </Box>
      <Card datas={managements} />
    </React.Fragment>
  );
};

export default Management;
