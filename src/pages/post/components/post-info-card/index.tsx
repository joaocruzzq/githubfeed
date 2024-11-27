import { PostInfoCardContainer, PostInfoCardContent, PostInfoCardInfoSection } from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAngleLeft, faArrowUpRightFromSquare, faCalendarDay, faComment } from "@fortawesome/free-solid-svg-icons";

import { formatDistanceToNow, parse, parseISO } from "date-fns"
import { ptBR } from "date-fns/locale"

interface PostInfoCardProps {
   title: string
   login: string
   created_at: string
   comments: number
}

export function PostInfoCard(props: PostInfoCardProps) {
   function formatDateRelative(dateString: string): string {
      try {
         const parsedDate = parseISO(dateString)

         return formatDistanceToNow(parsedDate, {
            addSuffix: true,
            locale: ptBR
         })
      }

      catch {
         return "Data inválida"
      }
   }

   return (
      <PostInfoCardContainer>
         <PostInfoCardContent>
            <div className="profile-header">
               <a href="/">
                  <FontAwesomeIcon icon={faAngleLeft}/>
                  VOLTAR
               </a>

               <a href="">
                  VER NO GITHUB
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
               </a>
            </div>

            <h1>{props.title}</h1>

            <div className="informations">
               <PostInfoCardInfoSection>
                  <FontAwesomeIcon icon={faGithub} />
                  {props.login}
               </PostInfoCardInfoSection>

               <PostInfoCardInfoSection>
                  <FontAwesomeIcon icon={faCalendarDay} />
                  {formatDateRelative(props.created_at)}
               </PostInfoCardInfoSection>

               <PostInfoCardInfoSection>
                  <FontAwesomeIcon icon={faComment} />
                  {props.comments ?
                     `{props.comments} comentários` : "0 comentários"
                  } 
               </PostInfoCardInfoSection>
            </div>
         </PostInfoCardContent>
      </PostInfoCardContainer>
   )
}