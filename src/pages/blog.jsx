import React from "react";
import { Box } from "@mui/material";
import Home from "@/components/blogComponents/Home";
import Section7 from "@/components/homeComponents/Section7";
import ArticleSlider from "@/components/common/ArticleSlider";
import { featProps, prevProps } from "@/data/articles";
import FullWidthSlider from "@/components/blogComponents/FullWidthSlider";
import {
  fetchFeaturedPosts,
  fetchLatestPost,
} from "@/utils/apiCalls/fetchPosts";
import SEO from "@/components/SEO";
import { blogSeo } from "@/data/seo";

const BlogPage = ({ latestPost, featuredPosts, posts }) => {
  return (
    <React.Fragment>
      <SEO data={blogSeo} />
      <Box mt={5}>
        <Home />
        <FullWidthSlider latestPost={latestPost} />
        <ArticleSlider props={prevProps} articles={posts} />
        <ArticleSlider props={featProps} articles={featuredPosts} />
        <Section7 />
      </Box>
    </React.Fragment>
  );
};

export async function getStaticProps() {
  try {
    const latestPost = await fetchLatestPost();
    const featuredPosts = await fetchFeaturedPosts(true);
    const posts = await fetchFeaturedPosts(false);

    return {
      props: {
        posts,
        latestPost,
        featuredPosts,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error("Error fetching posts:", error);
    return {
      props: {
        posts: [],
        latestPost: [],
        featuredPosts: [],
      },
    };
  }
}
export default BlogPage;
