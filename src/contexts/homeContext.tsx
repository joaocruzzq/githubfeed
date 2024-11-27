import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface IssuesProps {
  number: number
  title: string
  body: string
  created_at: string
}

interface IssueInfoProps {
  title: string
  login: string
  created_at: string
  comments: number
  body: string
}

interface IssuesContextType {
  issuesList: IssuesProps[];
  issueInfo: IssueInfoProps | null;
  fetchIssuesListInfo: (query?: string) => Promise<void>;
  fetchIssueInfo: (issueNumber: number) => Promise<void>;
}

interface IssuesProviderProps {
  children: ReactNode;
}

export const IssuesContext = createContext({} as IssuesContextType);

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issuesList, setIssuesList] = useState<IssuesProps[]>([]);

  const [issueInfo, setIssueInfo] = useState<IssueInfoProps | null>(null);

  async function fetchIssuesListInfo(query?: string) {
    try {
      let searchQuery = "repo:jaocruz/githubfeed";

      if (query) {
        searchQuery += ` ${query}`;
      }

      const response = await api.get("/search/issues", {
        params: {
          q: searchQuery,
        },
      });

      if (response.data.items) {
        const extractedData = response.data.items.map((item: any) => ({
          number: item.number,
          title: item.title,
          body: item.body,
          created_at: item.created_at,
        }));

        setIssuesList(extractedData);
      } else {
        setIssuesList([]);
      }
    } catch (error) {
      console.error("Erro ao buscar lista de issues:", error);
    }
  }

  async function fetchIssueInfo(issueNumber: number) {
    try {
      const response = await api.get(`repos/jaocruz/githubfeed/issues/${issueNumber}`);

      const extractedData = {
        title: response.data.title,
        login: response.data.user.login,
        created_at: response.data.created_at,
        comments: response.data.comments,
        body: response.data.body,
      };

      setIssueInfo(extractedData);
    } catch (error) {
      console.error("Erro ao buscar informações do issue:", error);
    }
  }

  useEffect(() => {
    fetchIssuesListInfo();
  }, []);

  return (
    <IssuesContext.Provider
      value={{
        issuesList,
        issueInfo,
        fetchIssuesListInfo,
        fetchIssueInfo,
      }}
    >
      {children}
    </IssuesContext.Provider>
  );
}
