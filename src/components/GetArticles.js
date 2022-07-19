import { useQuery, gql } from "@apollo/client";
import { GET_ARTICLES, GET_RICH_TEXT } from "../queries";
import Article from "./Article";

function GetArticles() {
  const { loading, error, data } = useQuery(GET_ARTICLES);

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.log(error);
    return <p>Error :( </p>;
  }

  return data.articles.map((articleData, index) => (
    <Article key={index} articleData={articleData} />
  ));
}

export default GetArticles;
