import { HeaderContainer } from "./styles";

export function Header() {
   return (
      <HeaderContainer>
         <img className="header-logo" src="/bigger-logo.svg" alt="" />
         
         <div className="header-effects">
            <img src="/left-header-effect.svg" alt="" />
            <img src="/right-header-effect.svg" alt="" />
         </div>
      </HeaderContainer>
   )
}