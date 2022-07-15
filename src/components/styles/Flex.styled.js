import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  /* align-items: center; */

  /* & > div,
  & > ul {
    flex: 1;
  } */

  @media (max-width: ${({ theme }) => theme.mobile}) {
  }
`;

export default Flex;
