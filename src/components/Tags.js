import StyledTags from "./styles/Tags.styled";

function Tags(props) {
  // tags = array of string key-words

  function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }

  return (
    <StyledTags>
      {props.tags.map((tag, index) => (
        <li key={index}>{capitalize(tag)}</li>
      ))}
    </StyledTags>
  );
}

export default Tags;
