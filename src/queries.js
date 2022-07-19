import { gql } from "@apollo/client";

export const GET_ARTICLES = gql`
  query GetRichText {
    articles {
      title
      author
      createdAt
      content {
        html
      }
      tags
    }
  }
`;
