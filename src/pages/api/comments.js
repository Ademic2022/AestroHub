import { GraphQLClient, gql } from "graphql-request";

const endpoint = process.env.GRAPHCMS_ENDPOINT;
const token = process.env.GRAPHCMS_TOKEN;

export default async function comments(req, res) {
  const graphQLAPI = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  const query = gql`
    mutation CreateComment(
      $name: String!
      $email: String!
      $comment: String!
      $slug: String!
    ) {
      createComment(
        data: {
          name: $name
          email: $email
          comment: $comment
          post: { connect: { slug: $slug } }
        }
      ) {
        id
      }
    }
  `;

  const result = await graphQLAPI.request(query, req.body);
  return res.status(200).send(result);
}
