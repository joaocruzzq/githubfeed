import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
   }

   :focus {
      outline: 1px solid ${props => props.theme.blue};
   }

   body {
      transition: outline ease-in-out 0.2s;
      -webkit-font-smoothing: antialiased;
      color: ${props => props.theme["base-text"]};
      background: ${props => props.theme["base-background"]};
   }

   body, h1, span, input, button, textarea {
      line-height: 160% !important;
      font: 300 1rem Nunito, sans-serif;
   }

   a {
      text-decoration: none;
   }
`