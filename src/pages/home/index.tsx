import { Header } from "../../components/header";
import { HomeContainer, PostsContainer, SearchbarContainer } from "./styles";

import { PostCard } from "./components/post-card";
import { ProfileCard } from "./components/profile-card";

import { api } from "../../lib/axios";
import { useEffect, useState } from "react";

interface IssueProps {
   id: number
   title: string
   body: string
   created_at: string
}

export function Home() {
   const [issuesList, setIssuesList] = useState<IssueProps[]>([])

   useEffect(() => {
      async function fetchIssuesListInfo() {
         const response = await api.get('https://api.github.com/search/issues?q=Boas%20pr%C3%A1ticas%20repo:rocketseat-education/reactjs-github-blog-challenge')
   
         const extractedData = response.data.items.map((item: any) => ({
            id: item.id,
            title: item.title,
            body: item.body,
            created_at: item.created_at,
        }));

         setIssuesList(extractedData)
      }

      fetchIssuesListInfo()
   }, [])

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