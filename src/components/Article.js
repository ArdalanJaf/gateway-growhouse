import StyledArticle from "./styles/Article.styled";
import Tags from "./Tags";
import { Markup } from "interweave";

function Article({ articleData }) {
  const { title, author, publishedAt, content, tags } = articleData;

  function formatDate(date) {
    // Example of date recieved from CMS before formatted: "2022-07-18T15:25:02.381536+00:00"
    return (
      date.substr(8, 2) + "/" + date.substr(5, 2) + "/" + date.substr(0, 4)
    );
    // Output: 18/07/2022
  }

  return (
    <>
      <StyledArticle>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <p>{formatDate(publishedAt)}</p>
        <Markup content={content.html} tagName="div" />
        <Tags tags={tags} />
      </StyledArticle>
    </>
  );
}

export default Article;
