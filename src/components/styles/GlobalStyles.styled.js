import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

/*insert fonts here*/

    * {
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.colors.body | "#fff"};
        font-family: sans-serif;
        font-size: 1.15em;
        margin: 0;
        color: hsl(192, 100%, 9%);
    }

    p {
        line-height: 1.5;
    }

    img {
        max-width: 100%;
    }
`;

export default GlobalStyles;
