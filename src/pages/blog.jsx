import React from "react";
import { Box } from "@mui/material";
import Section1 from "@/components/blogComponents/Section1";
import Section7 from "@/components/homeComponents/Section7";
import ArticleSlider from "@/components/common/ArticleSlider";
import { articles, featProps, prevProps } from "@/data/articles";

const BlogPage = () => {
  return (
    <React.Fragment>
      <Box mt={5}>
        <Section1 />
        <ArticleSlider props={prevProps} articles={articles} />
        <ArticleSlider props={featProps} articles={articles} />
        <Section7 />
      </Box>
    </React.Fragment>
  );
};

export default BlogPage;
