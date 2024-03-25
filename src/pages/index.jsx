import React from "react";
import { Box } from "@mui/material";
import Home from "@/components/homeComponents/Home";
import Company from "@/components/homeComponents/Company";
import ServiceComponent from "@/components/homeComponents/ServiceComponent";
import Offering from "@/components/homeComponents/Offering";
import Projects from "@/components/homeComponents/Projects";
import Section7 from "@/components/homeComponents/Section7";
import ArticleSlider from "@/components/common/ArticleSlider";
import { fetchPosts } from "@/utils/apiCalls/fetchPosts";
import { homeProps } from "@/data/articles";

const HomePage = ({postsData}) => {
  return (
    <React.Fragment>
      <Box mt={5}>
        <Home />
        <Company />
        <ServiceComponent />
        <Offering />
        <Projects />
        <ArticleSlider props={homeProps} articles={postsData} />
        <Section7 />
      </Box>
    </React.Fragment>
  );
};

export async function getStaticProps() {
  try {
    const postsData = await fetchPosts();

    return {
      props: {
        postsData,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error("Error fetching posts:", error);
    return {
      props: {
        postsData: [],
      },
    };
  }
}
export default HomePage;
