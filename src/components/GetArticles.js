import { useQuery, gql } from "@apollo/client";
import { GET_ARTICLES } from "../queries";

function GetArticles() {
  const { loading, error, data } = useQuery(GET_ARTICLES);

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.log(error);
    return <p>Error :( </p>;
  }

  return data.articles.map(({ title, id }) => (
    <div key={id}>
      <h3>{title}</h3>
    </div>
  ));
}

export default GetArticles;
