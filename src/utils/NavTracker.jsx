import React from "react";
import { Box } from "@mui/material";

const NavTracker = ({ activeButton, cleanedItem }) => {
  let backgroundColor = "#fff";

  switch (cleanedItem) {
    case "home":
      backgroundColor = "#65fe08";
      break;
    case "services":
      backgroundColor = "#cb0000";
      break;
    case "blog":
      backgroundColor = "#0096FF";
      break;
    case "launchpad":
      backgroundColor = "#FFFF00";
      break;
    case "contact-us":
      backgroundColor = "#6DF8FD";
      break;
    default:
      backgroundColor = "#fff";
      break;
  }
  return (
    <Box
      sx={{
        display: activeButton === cleanedItem ? "block" : "none",
        position: "absolute",
        boxShadow: `0px 2px 25px 2px ${backgroundColor}`,
        top: -8,
        height: "2px",
        width: "25px",
        bgcolor: { backgroundColor },
        borderRadius: "10px",
      }}
    ></Box>
  );
};

export default NavTracker;
