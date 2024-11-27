import { Header } from "../../components/header";
import { PostInfoCard } from "./components/post-info-card";
import { PostPageContainer, PostPageContent } from "./styles";

import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";

import { IssuesContext } from "../../contexts/homeContext";

export function Post() {
   const { id } = useParams()
   const { issueInfo, fetchIssueInfo} = useContext(IssuesContext)

   useEffect(() => {
      fetchIssueInfo(Number(id))
   }, [id, fetchIssueInfo])

   return (
      <>
      <Header />

      <PostPageContainer>
         <PostInfoCard
         title={issueInfo.title}
         login={issueInfo.login}
         comments={issueInfo.comments}
         created_at={issueInfo.created_at}
         id={issueInfo.id}
         />

         <PostPageContent>
            <div className="main-text">
               {issueInfo?.body}
            </div>
         </PostPageContent>
      </PostPageContainer>
      </>
   )
}