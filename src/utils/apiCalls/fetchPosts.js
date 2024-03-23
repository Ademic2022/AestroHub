import { GraphQLClient, gql } from "graphql-request";

export const fetchPosts = async () => {
  const endpoint =
    "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cltyt1rd20aun07uwh60zqv0w/master";
  const graphQLClient = new GraphQLClient(endpoint);

  const query = gql`
    {
      posts {
        title
        datePublished
        content {
          html
        }
        slug
        author {
          name
          avatar {
            url
          }
        }
        coverPhoto {
          url
        }
      }
    }
  `;

  try {
    const data = await graphQLClient.request(query);
    return data.posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

export async function fetchPostBySlug(slug) {
  try {
    const posts = await fetchPosts();
    const post = posts.find((post) => post.slug === slug);
    return post;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return null;
  }
}
