import BlogDetailsChild from "@/components/blogComponents/blogDetails/BlogDetailsChild";
import ArticleSlider from "@/components/common/ArticleSlider";
import { articles, prevProps } from "@/data/articles";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import { useRouter } from "next/router";
import Section7 from "@/components/homeComponents/Section7";

const BlogDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <React.Fragment>
      <BlogDetailsChild />
      <ArticleSlider props={prevProps} articles={articles} />
      <Section7 />
    </React.Fragment>
  );
};

export default BlogDetails;
