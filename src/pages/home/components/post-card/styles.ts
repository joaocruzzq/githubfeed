import styled from "styled-components";
import * as RadioGroup from "@radix-ui/react-radio-group";

export const PostCardContainer = styled(RadioGroup.Item)`
   border: 0;
   border-radius: 10px;

   width: 100%;
   height: 100%;

   min-height: 16.25rem;

   display: grid;
   grid-template-rows: auto 1fr;
   
   padding: 2rem 2rem 2.5rem;

   outline: 2px solid transparent;
   transition: outline ease-in-out 0.4s;

   background: ${props => props.theme["base-post"]};

   &:focus {
      outline: 2px solid ${props => props.theme["base-label"]};
   }

   &:hover {
      cursor: pointer;
      outline: 2px solid ${props => props.theme["base-label"]};
   }

   h1 {
      text-align: left;
   }

   span {
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;

      text-align: left;
      color: ${props => props.theme["base-text"]};
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