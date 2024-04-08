import BlogDetailsChild from "@/components/blogComponents/blogDetails/BlogDetailsChild";
import ArticleSlider from "@/components/common/ArticleSlider";
import { prevProps } from "@/data/articles";
import SEO from "@/components/SEO";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import { fetchPosts, fetchPostBySlug } from "@/utils/apiCalls/fetchPosts";
import Section7 from "@/components/homeComponents/Section7";
import { Backdrop, CircularProgress, Typography, alpha } from "@mui/material";
import { useRouter } from "next/router";
import { truncateContent } from "@/utils/postTruncator";

export async function getStaticPaths() {
  const posts = await fetchPosts();

  // Map fetched slugs to paths
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  // Fetch individual post data based on the slug
  const post = await fetchPostBySlug(params.slug);

  // Fetch all posts except the current one
  const allPosts = await fetchPosts();
  const filteredPosts = allPosts.filter((p) => p.slug !== params.slug);

  return {
    props: {
      post,
      allPosts: filteredPosts,
    },
  };
}

const BlogDetails = ({ post, allPosts }) => {
  const router = useRouter();
  // const { title, content, featuredImage } = post;
  const seoData = {
    title: post.title,
    description: truncateContent(post.content.html, 40),
    ogImage: post.featuredImage.url,
  };
  console.log(seoData);

  if (router.isFallback) {
    return (
      <Backdrop
        open={true}
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          pointerEvents: "none",
          bgcolor: alpha("#fff", 0.4),
        }}
      >
        <CircularProgress color="inherit" sx={{ mr: 2 }} />
        <Typography color="#fff">Loading Post...</Typography>
      </Backdrop>
    );
  }
  return (
    <React.Fragment>
      {/* <SEO data={seoData} /> */}
      <BlogDetailsChild post={post} />
      <ArticleSlider props={prevProps} articles={allPosts} />
      <Section7 />
    </React.Fragment>
  );
};

export default BlogDetails;
