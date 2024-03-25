import BlogDetailsChild from "@/components/blogComponents/blogDetails/BlogDetailsChild";
import ArticleSlider from "@/components/common/ArticleSlider";
import { articles, prevProps } from "@/data/articles";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import { fetchPosts, fetchPostBySlug } from "@/utils/apiCalls/fetchPosts";
import Section7 from "@/components/homeComponents/Section7";

export async function getStaticPaths() {
  const posts = await fetchPosts();

  // Map fetched slugs to paths
  const paths = posts.map((post) => ({
    params: { slug: post.node.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch individual post data based on the slug
  const post = await fetchPostBySlug(params.slug);

  // Fetch all posts except the current one
  const allPosts = await fetchPosts();
  const filteredPosts = allPosts.filter((p) => p.node.slug !== params.slug);

  return {
    props: {
      post,
      allPosts: filteredPosts,
    },
  };
}

const BlogDetails = ({ post, allPosts }) => {
  return (
    <React.Fragment>
      <BlogDetailsChild post={post} />
      <ArticleSlider props={prevProps} articles={allPosts} />
      <Section7 />
    </React.Fragment>
  );
};

export default BlogDetails;
