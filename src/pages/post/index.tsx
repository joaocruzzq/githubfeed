import { Header } from "../../components/header";
import { PostInfoCard } from "./components/post-info-card";
import { PostPageContainer, PostPageContent } from "./styles";

import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";

import { IssuesContext } from "../../contexts/homeContext";

import ReactMarkdown from "react-markdown";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/cjs/styles/prism";

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
            <ReactMarkdown
            components={{
               code({ node, inline, className, children, ...props }: any) {
                  const match = /language-(\w+)/.exec(className || "");
                 
                  if (!inline && match) {
                     return (
                        <SyntaxHighlighter
                        style={dark}
                        language={match[1]}
                        PreTag="div"
                        {...props}
                        >
                           {String(children).replace(/\n$/, "")}
                        </SyntaxHighlighter>
                     );
                  }
   
                  return (
                     <code className={className} {...props}>
                        {children}
                     </code>
                  );
               },
            }}
            >
               {issueInfo.body}
            </ReactMarkdown>
         </PostPageContent>
      </PostPageContainer>
      </>
   )
}