import React from "react";
import { Box } from "@mui/material";
import Home from "@/components/LaunchPad/Home";
import LaunchPadServices from "@/components/LaunchPad/LaunchPadServices";
import Section7 from "@/components/homeComponents/Section7";


const Launchpad = () => {
  return (
    <React.Fragment>
      <Box mt={5}>
        <Home />
        <LaunchPadServices />
        <Box mt={15}>
          <Section7
            bottomText
            bgcolor="#0EAD69"
            title=".... Aestro Hub x Aestro Pad ...."
          />
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Launchpad;