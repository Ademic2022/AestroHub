import React from "react";
import { fetchPosts } from "@/utils/apiCalls/fetchPosts";

const Posts = ({ postsData }) => {
  console.log(postsData);
  return (
    <div>
      <h1>Blog Posts</h1>
      {postsData.map((post) => (
        <div key={post.node.slug}>
          <h2>{post.node.title}</h2>
          <p>
            <strong>Author:</strong> {post.node.author.name}
          </p>
          <img src={post.node.author.photo.url} width="100px"/>
          <div dangerouslySetInnerHTML={{ __html: post.node.content.html }} />
          <img src={post.node.featuredImage.url} alt="" width="150px" />
        </div>
      ))}
    </div>
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

export default Posts;
