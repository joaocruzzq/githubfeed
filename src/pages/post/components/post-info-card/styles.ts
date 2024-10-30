import styled from "styled-components";

export const PostInfoCardContainer = styled.div`
   display: flex;

   gap: 2rem;
   margin-top: -5.5rem;
   padding: 2rem 2.5rem;

   align-items: center;
   justify-content: center;

   z-index: 1;
   border-radius: 10px;
   
   box-shadow: 0px 2px 28px rgba(0, 0, 0, 20%);
   background: ${props => props.theme["base-profile"]};
`

export const PostInfoCardContent = styled.div`
   width: 100%;

   display: flex;
   flex-direction: column;
   
   .profile-header {
      display: flex;
      margin-bottom: 0.5rem;
      justify-content: space-between;
   }

   .profile-header > a {
      display: flex;
      gap: 0.5rem;

      font-size: 0.75rem;
      font-weight: bold;
      
      height: fit-content;
      align-items: baseline;
      
      color: ${props => props.theme.blue};

      border-bottom: 1px solid transparent;
      transition: border-bottom ease-in-out 0.25s;

      &:hover {
         border-bottom: 1px solid ${props => props.theme.blue};
      }
   }

   h1 {
      font-size: 1.5rem;
      font-weight: bold;
      line-height: 130%;
      color: ${props => props.theme["base-title"]};
   }

   .informations {
      display: flex;

      gap: 1.5rem;
      margin-top: 0.5rem;
   }
`

export const PostInfoCardInfoSection = styled.div`
   display: flex;
   
   gap: 0.5rem;
   align-items: center;
   color: ${props => props.theme["base-subtitle"]};

   svg {
      width: 1.125rem;
      height: 1.125rem;
      color: ${props => props.theme["base-label"]};
   }
`