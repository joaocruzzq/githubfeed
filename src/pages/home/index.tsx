import { Header } from "../../components/header";
import { HomeContainer, PostsContainer, SearchbarContainer } from "./styles";

import { PostCard } from "./components/post-card";
import { ProfileCard } from "./components/profile-card";

import { useContext } from "react";
import { IssuesContext } from "../../contexts/homeContext";

import { useForm } from "react-hook-form";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod"

const searchFormSchema = z.object({
   query: z.string()
})

type SeachFormInput = z.infer<typeof searchFormSchema>

export function Home() {
   const { issuesList, fetchIssuesListInfo } = useContext(IssuesContext)

   const { handleSubmit, register } = useForm<SeachFormInput>({
      resolver: zodResolver(searchFormSchema)
   })

   async function handleSearchIssue(data: SeachFormInput){
      await fetchIssuesListInfo(data.query)
   }

   return (
      <>
      <Header />

      <HomeContainer>
         <ProfileCard />

         <SearchbarContainer onSubmit={handleSubmit(handleSearchIssue)}>
            <div className="search-header">
               <h2>Publicações</h2>
               <span>{issuesList.length} publicações</span>
            </div>

            <input
            type="text"
            placeholder="Buscar conteúdo"
            {...register("query")}
            />
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