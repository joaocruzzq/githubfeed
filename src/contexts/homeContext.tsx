import { createContext, ReactNode, useEffect, useState } from "react";

import { api } from "../lib/axios";

interface IssuesProps {
   id: number
   title: string
   body: string
   created_at: string
}

interface IssuesContextType {
   issuesList: IssuesProps[]
}

interface IssuesProviderProps {
   children: ReactNode
}

export const IssuesContext = createContext({} as IssuesContextType)

export function IssuesProvider({ children }: IssuesProviderProps) {
   const [issuesList, setIssuesList] = useState<IssuesProps[]>([])

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
      <IssuesContext.Provider value={{ issuesList }}>
         { children }
      </IssuesContext.Provider>
   )
}