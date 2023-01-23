import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}


a, a:visited {
    color: #581DFF;
    text-decoration: none;
}

html, body {
    height:100%;
}

html {
    box-sizing: border-box;
    font-size: 62.5%;

    @media only screen and (max-width: 1200px){
        font-size: 58%;
    }
    @media only screen and (min-width: 1980px){
        font-size: 70%;
    }
}

body {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    background: #F9F9F9;
    color: #000;
}

h1 {
    font-weight: 400;
    font-size: 64px;
    line-height: 87px;
    text-align: center;
    font-family: "Nunito", sans-serif;
}
`;

export default GlobalStyles;
