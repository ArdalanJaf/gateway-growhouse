import { gql } from "@apollo/client";

// export const GET_ARTICLES = gql`
//   query GetArticles {
//     articles {
//       title
//       body {
//         raw
//         html
//         markdown
//         text
//       }
//       image {
//         id
//       }
//       slug
//     }
//   }
// `;

export const GET_ARTICLES = gql`
  query GetRichText {
    articles {
      title
      content {
        html
      }
      tags
    }
  }
`;
