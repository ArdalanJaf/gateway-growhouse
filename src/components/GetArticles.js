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

  function createMarkup(html) {
    return { __html: html };
  }

  return data.articles.map(({ title, content, tags }, index) => (
    // <div key={index}>
    //   <h2>{title}</h2>
    //   <div dangerouslySetInnerHTML={createMarkup(content.html)} />
    //   <p>{tags}</p>
    // </div>
    <Article
      title={title}
      content={createMarkup(content.html)}
      tags={tags}
      index={index}
    />
  ));
}

export default GetArticles;
