import styled from "styled-components";

export const HomeContainer = styled.div`
   max-width: 54rem;

   margin: auto;
   padding: 0 1.5rem;

   display: flex;
   flex-direction: column;
   justify-content: center;
`

export const SearchbarContainer = styled.div`
   display: flex;
   flex-direction: column;

   .search-header {
      display: flex;
      justify-content: space-between;
      margin: 4.5rem 0 0.75rem;
   }

   .search-header > h2 {
      font-size: 1.125rem;
      font-weight: bold;
      color: ${props => props.theme["base-subtitle"]};
   }

   .search-header > span {
      font-size: 0.875rem;
      font-weight: normal;
      color: ${props => props.theme["base-span"]};
   }

   input {
      border: 0;

      border-radius: 6px;
      padding: 0.75rem 1rem;

      color: ${props => props.theme["base-text"]};
      background: ${props => props.theme["base-input"]};
      border: 1px solid ${props => props.theme["base-border"]};

      &::placeholder {
         color: ${props => props.theme["base-label"]};
      }
   }
`

export const PostsContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

   gap: 2rem;
   margin: 3rem 0 14rem;
`