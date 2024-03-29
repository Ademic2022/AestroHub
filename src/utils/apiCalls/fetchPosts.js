import { GraphQLClient, gql } from "graphql-request";

const endpoint = process.env.GRAPHCMS_ENDPOINT;
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
    return data.postsConnection.edges.map((edge) => edge.node);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

export const fetchPostBySlug = async (slug) => {
  try {
    const posts = await fetchPosts();
    const post = posts.find((post) => post.slug === slug);
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
      return data.postsConnection.edges[0].node;
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
    return data.postsConnection.edges.map((edge) => edge.node);
  } catch (error) {
    console.error("Error fetching featured posts:", error);
    return [];
  }
};

// export const getComments = async (slug) => {
//   const query = gql`
//     query GetComments($slug: String!) {
//       comments(where: { post: { slug: $slug } }) {
//         name
//         createdAt
//         comment
//       }
//     }
//   `;

//   try {
//     const result = await graphQLClient.request(query, { slug });
//     // return result.comments;
//     console.log(result.comments);
//   } catch (error) {
//     console.error("Error fetching featured posts:", error);
//   }
// };

export const getComments = async (slug) => {
  try {
    const query = encodeURIComponent(`
      query GetComments($slug: String!) {
        comments(where: { post: { slug: $slug } } orderBy: createdAt_DESC ) {
          name
          createdAt
          comment
        }
      }
    `);

    const response = await fetch(
      `https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clu3baxry08us07uwhvu0c2kx/master?query=${query}&variables={"slug":"${slug}"}`
    );
    const data = await response.json();

    if (data && data.data && data.data.comments) {
      return data.data.comments;
    } else {
      throw new Error("No comments found");
    }
  } catch (error) {
    console.error("Error fetching comments:", error);
    return [];
  }
};
