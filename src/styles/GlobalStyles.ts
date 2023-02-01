import { createGlobalStyle } from "styled-components";
import { colors } from ".";


const GlobalStyles = createGlobalStyle`
  * {
    font-family: "Nunito Sans", sans-serif;
    font-weight: 700;
    box-sizing: border-box;
    font-size: 16px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    user-select: none;
    color: ${colors.white};
  }

  img {
    object-position: center;
    object-fit: contain;
    vertical-align: middle;
    user-select: none;
  }

  div {
    font-size: inherit;
    font-weight: inherit;
    text-align: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 7rem;
    margin: 0;
  }

  h2 {
    font-size: 8rem;
  }
  h3 {
    font-size: 5rem;
  }
`;

export default GlobalStyles;