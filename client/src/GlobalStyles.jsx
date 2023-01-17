import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

/* 
note: This import isn't working for me. Added import to index.html.
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;800;900&family=Rubik:wght@800&display=swap'); 
*/

*{
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    border-radius: 1rem;
}
a, a:visited {
    color: #581DFF;
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
body{
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    line-height: 1.6;
    font-size: 1.6rem;
    background: #F9F9F9;
    color: #333;
}

button {
    padding: 2rem 4rem;
    margin: auto;
}

h1 {
    font-weight: 400;
    font-size: 64px;
    line-height: 87px;
    text-align: center;
}
`;

export default GlobalStyles;
