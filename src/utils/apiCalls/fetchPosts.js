import { GraphQLClient, gql } from "graphql-request";

const endpoint =
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clu3baxry08us07uwhvu0c2kx/master";
const graphQLClient = new GraphQLClient(endpoint);

export const fetchPosts = async () => {
  const query = gql`
    query AllPosts {
      postsConnection(orderBy: createdAt_DESC) {
        edges {
          node {
            author {
              name
              id
              bio
              photo {
                url
              }
            }
            content {
              html
            }
            createdAt
            slug
            title
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  try {
    const data = await graphQLClient.request(query);
    return data.postsConnection.edges;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

export const fetchPostBySlug = async (slug) => {
  try {
    const posts = await fetchPosts();
    const post = posts.find((post) => post.node.slug === slug);
    return post;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return null;
  }
};

export const fetchLatestPost = async () => {
  const query = gql`
    query LatestPost {
      postsConnection(first: 1, orderBy: createdAt_DESC) {
        edges {
          node {
            author {
              name
              id
              bio
              photo {
                url
              }
            }
            content {
              html
            }
            createdAt
            slug
            title
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  try {
    const data = await graphQLClient.request(query);
    if (data.postsConnection.edges.length > 0) {
      return data.postsConnection.edges[0].node; // Return the latest post
    } else {
      return null; // No posts found
    }
  } catch (error) {
    console.error("Error fetching latest post:", error);
    return null;
  }
};

export const fetchFeaturedPosts = async (featured) => {
  const query = gql`
    query FeaturedPosts($featured: Boolean!) {
      postsConnection(where: { featuredPost: $featured }) {
        edges {
          node {
            author {
              name
              id
              bio
              photo {
                url
              }
            }
            content {
              html
            }
            createdAt
            slug
            title
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  try {
    const data = await graphQLClient.request(query, { featured });
    return data.postsConnection.edges.map((edge) => edge.node); // Return the featured posts
  } catch (error) {
    console.error("Error fetching featured posts:", error);
    return [];
  }
};
