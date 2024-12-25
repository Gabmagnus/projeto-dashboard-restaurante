import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; 
}

html, body, #root { 
  height: 100vh;
  background-color: var(--gray);
}

body, input, button, textarea {
  font-family: 'Roboto', sans-serif;
} 

:root {
  --gray: #1A1A1E;
  --dark-gray: #121214;
  --light-gray: #29292E;
  --lighter-gray: #E1E1E6;
  --white: #FFF;
  --purple-highlight: #9956F6
}
`