import React from "react";
import { Box } from "@mui/material";
import Section1 from "@/components/homeComponents/Section1";
import Section2 from "@/components/homeComponents/Section2";
import Section3 from "@/components/homeComponents/Section3";
import Section4 from "@/components/homeComponents/Section4";
import Section5 from "@/components/homeComponents/Section5";
import Section7 from "@/components/homeComponents/Section7";
import ArticleSlider from "@/components/common/ArticleSlider";
import { articles, homeProps } from "@/data/articles";

const Home = () => {
  return (
    <React.Fragment>
      <Box mt={5}>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <ArticleSlider props={homeProps} articles={articles} />
        <Section7 />
      </Box>
    </React.Fragment>
  );
};

export default Home;
