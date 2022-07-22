import { gql } from "@apollo/client";

export const GET_ARTICLES = gql`
  query GetArticles {
    articles {
      title
      author
      publishedAt
      content {
        html
      }
      thumbnail {
        url
      }
      tags
    }
  }
`;

export function GET_THUMBNAILS_BY_TAG(tag) {
  return gql`
        query GetThumbnailsByTag {
            
        }
        `;
}
