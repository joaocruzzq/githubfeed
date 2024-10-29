import styled from "styled-components";

export const HeaderContainer = styled.header`
   width: 100%;
   height: 18.5rem;

   display: flex;
   align-items: center;
   justify-content: center;

   background: ${props => props.theme["base-profile"]};
   
   .header-effects {
      width: 100%;
      position: absolute;

      display: flex;
      align-items: baseline;
      justify-content: space-between;
   }

   .header-logo {
      margin-top: -4rem;
   }
`