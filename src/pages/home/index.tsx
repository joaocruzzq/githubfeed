import { Header } from "../../components/header";
import { HomeContainer, PostsContainer, SearchbarContainer } from "./styles";

import { PostCard } from "./components/post-card";
import { ProfileCard } from "./components/profile-card";

import { useContext } from "react";
import { IssuesContext } from "../../contexts/homeContext";

export function Home() {
   const { issuesList } = useContext(IssuesContext)

   return (
      <>
      <Header />

      <HomeContainer>
         <ProfileCard />

         <SearchbarContainer>
            <div className="search-header">
               <h2>Publicações</h2>
               <span>{issuesList.length} publicações</span>
            </div>

            <input type="text" placeholder="Buscar conteúdo"/>
         </SearchbarContainer>

         { issuesList.length > 0 &&
            <PostsContainer>
               {issuesList.map(post => {
                  return (
                     <PostCard
                     key={post.id}
                     title={post.title}
                     body={post.body}
                     created_at={post.created_at}
                     />
                  )
               })}
            </PostsContainer>
         }
      </HomeContainer>
      </>
   )
}