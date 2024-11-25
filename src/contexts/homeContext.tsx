import { createContext, ReactNode, useEffect, useState } from "react";

interface IssuesProps {
   id: number
   title: string
   body: string
   created_at: string
}

interface IssuesContextType {
   issuesList: IssuesProps[]
   fetchIssuesListInfo: (query?: string) => Promise<void>
}

interface IssuesProviderProps {
   children: ReactNode
}

export const IssuesContext = createContext({} as IssuesContextType)

export function IssuesProvider({ children }: IssuesProviderProps) {
   const [issuesList, setIssuesList] = useState<IssuesProps[]>([])

   async function fetchIssuesListInfo(query?: string) {
      let searchQuery = 'repo:jaocruz/githubfeed'

      if(query){
         searchQuery += ` ${query}`
      }

      const url = new URL("https://api.github.com/search/issues")
      url.searchParams.append("q", searchQuery)

      const response = await fetch(url)
      const data = await response.json()

      if(data.items) {
         const extractedData = data.items.map((item: any) => ({
            id: item.id,
            title: item.title,
            body: item.body,
            created_at: item.created_at,
         }));

         setIssuesList(extractedData)
      }

      else {
         setIssuesList([])
      }
   }

   useEffect(() => {
      fetchIssuesListInfo()
   }, [])

   return (
      <IssuesContext.Provider value={{
         issuesList,
         fetchIssuesListInfo
      }}>
         { children }
      </IssuesContext.Provider>
   )
}