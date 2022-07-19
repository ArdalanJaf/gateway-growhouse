import StyledArticle from "./styles/Article.styled";
import Tags from "./Tags";

function Article({ articleData }) {
  const { title, author, createdAt, content, tags } = articleData;

  function createMarkup(html) {
    return { __html: html };
  }

  return (
    <StyledArticle>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <p>{createdAt}</p>
      <div dangerouslySetInnerHTML={createMarkup(content.html)} />
      <Tags tags={tags} />
    </StyledArticle>
  );
}

export default Article;
