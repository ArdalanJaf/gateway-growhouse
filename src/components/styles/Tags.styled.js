import styled from "styled-components";

const StyledTags = styled.ul`
  list-style: none;
  display: flex;

  // individual tag style
  li {
    border: 1px solid #000;
    border-radius: 8px;
    padding: 5px;
  }
`;

export default StyledTags;
