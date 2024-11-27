import styled from "styled-components";

export const PostPageContainer = styled.div`
   max-width: 54rem;

   margin: auto;
   padding: 0 1.5rem;

   display: flex;
   flex-direction: column;
   justify-content: center;
`

export const PostPageContent = styled.div`
   display: flex;
   flex-direction: column;
   
   gap: 1.5rem;
   padding: 2.5rem 2rem;

   h3 {
      font-size: 1rem;
      font-weight: normal;
      text-decoration: underline;
      color: ${props => props.theme.blue};
      margin-bottom: -1.125rem;
   }

   pre {
      padding: 1rem;
      border-radius: 2px;
      font-family: 'Fira Code', sans-serif;
      background: ${props => props.theme["base-post"]};
   }
`