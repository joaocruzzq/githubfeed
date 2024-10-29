import styled from "styled-components";

export const PostCardContainer = styled.div`
   padding: 2rem;
   border-radius: 10px;

   background: ${props => props.theme["base-post"]};

   outline: 2px solid transparent;
   transition: outline ease-in-out 0.4s;

   &:hover{
      cursor: pointer;
      outline: 2px solid ${props => props.theme["base-label"]};
   }

   .post-header {
      display: flex;
      gap: 1rem;
      margin-bottom: 1.25rem;
   }

   .post-header > h1 {
      font-size: 1.25rem;
      font-weight: bold;
      color: ${props => props.theme["base-title"]};
   }

   .post-header > strong {
      flex-shrink: 0;
      font-size: 0.875rem;
      font-weight: normal;
      color: ${props => props.theme["base-span"]};
   }

   span {
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
   }
`