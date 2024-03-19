import React from "react";
import { Box } from "@mui/material";
import Section1 from "@/components/LaunchPad/Section1";
import LaunchPadServices from "@/components/LaunchPad/LaunchPadServices";
import Section7 from "@/components/homeComponents/Section7";


const Launchpad = () => {
  return (
    <React.Fragment>
      <Box mt={5}>
        <Section1 />
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