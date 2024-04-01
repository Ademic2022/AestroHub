import React from "react";
import { Box } from "@mui/material";
import Home from "@/components/AboutComponent/Home";
import Section2 from "@/components/AboutComponent/Section2";
import WhyUs from "@/components/AboutComponent/WhyUs";
import Products from "@/components/AboutComponent/Products";
import Team from "@/components/AboutComponent/Team";
import FAQ from "@/components/AboutComponent/FAQ";
import Section7 from "@/components/homeComponents/Section7";
import SEO from "@/components/SEO";
import { aboutUsSeo } from "@/data/seo";

const AboutUs = () => {
  return (
    <React.Fragment>
      <SEO data={aboutUsSeo} />
      <Box mt={5}>
        <Home />
        <Section2 />
        <WhyUs />
        <Products />
        <Team />
        <FAQ />
        <Section7 />
      </Box>
    </React.Fragment>
  );
};

export default AboutUs;
