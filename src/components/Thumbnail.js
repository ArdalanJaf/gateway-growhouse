import StyledThumbnail from "./styles/Thumbnail.styled";
import { Markup } from "interweave";

function Thumbnail({ title, content }) {
  // Grabs first image in article content as thumnail
  function getThumnailImage(htmlContent) {
    let regex = /<img([\w\W]*?)>/;
    return htmlContent.match(regex)[0];
  }

  return (
    <StyledThumbnail>
      <h2>{title}</h2>
      <Markup content={getThumnailImage(content.html)} tagName="div" />
    </StyledThumbnail>
  );
}

export default Thumbnail;
