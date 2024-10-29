import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
   }

   body {
      -webkit-font-smoothing: antialiased;
      color: ${props => props.theme["base-text"]};
      background: ${props => props.theme["base-background"]};
   }

   body, input, button, textarea {
      font: 300 1rem Nunito, sans-serif;
   }

   a {
      text-decoration: none;
   }
`