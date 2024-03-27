import React from "react";
import { Box } from "@mui/material";
import SEO from "@/components/SEO";
import { servicesSeo } from "@/data/seo";
import Company from "@/components/serviceComponents/Company";
import Design from "@/components/serviceComponents/Design";
import Development from "@/components/serviceComponents/Development";
import Section1 from "@/components/serviceComponents/Home";
import Management from "@/components/serviceComponents/Management";
import Marketing from "@/components/serviceComponents/Marketing";
import Offering from "@/components/serviceComponents/Offering";
import Writing from "@/components/serviceComponents/Writing";

const services = () => {
  return (
    <React.Fragment>
      <SEO data={servicesSeo}/>
      <Box mt={5}>
        <Section1 />
        <Marketing />
        <Design />
        <Management />
        <Development />
        <Writing />
        <Offering />
        <Company />
      </Box>
    </React.Fragment>
  );
};

export default services;
