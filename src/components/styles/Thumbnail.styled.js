import styled from "styled-components";

const StyledThumbnail = styled.div`
  width: 500px;
  height: 300px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 0px 6px 3px rgba(0, 0, 0, 0.2);

  div {
    height: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    border img {
      height: 100%;
      width: auto;
    }
  }

  h2 {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    text-align: center;
    font-size: 40px;
    color: #fff;
  }
`;

export default StyledThumbnail;
