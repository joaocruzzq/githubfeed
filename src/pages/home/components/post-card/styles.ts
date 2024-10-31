import styled from "styled-components";

export const PostCardContainer = styled.div`
   border-radius: 10px;
   padding: 2rem 2rem 2.5rem;

   background: ${props => props.theme["base-post"]};

   outline: 2px solid transparent;
   transition: outline ease-in-out 0.4s;

   &:hover{
      cursor: pointer;
      outline: 2px solid ${props => props.theme["base-label"]};
   }

   span {
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
   }
`

export const PostCardContent = styled.div`
   display: flex;

   gap: 1rem;
   margin-bottom: 1.25rem;

   h1 {
      font-size: 1.25rem;
      line-height: 160%;
      font-weight: bold;
      color: ${props => props.theme["base-title"]};
   }

   strong {
      flex-shrink: 0;
      font-size: 0.875rem;
      font-weight: normal;
      color: ${props => props.theme["base-span"]};
   }
`