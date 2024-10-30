import { Header } from "../../components/header";
import { HomeContainer, PostsContainer, SearchbarContainer } from "./styles";


import { PostCard } from "./components/post-card";
import { ProfileCard } from "./components/profile-card";

export function Home() {
   return (
      <>
      <Header />

      <HomeContainer>
         <ProfileCard />

         <SearchbarContainer>
            <div className="search-header">
               <h2>Publicações</h2>
               <span>6 publicações</span>
            </div>

            <input type="text" placeholder="Buscar conteúdo"/>
         </SearchbarContainer>

         <PostsContainer>
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
         </PostsContainer>
      </HomeContainer>
      
      </>
   )
}