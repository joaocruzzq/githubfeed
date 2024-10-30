import { PostInfoCardContainer, PostInfoCardContent, PostInfoCardInfoSection } from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faArrowUpRightFromSquare, faCalendarDay, faComment } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export function PostInfoCard() {
   return (
      <PostInfoCardContainer>
         <PostInfoCardContent>
            <div className="profile-header">
               <a href="">
                  <FontAwesomeIcon icon={faAngleLeft}/>
                  VOLTAR
               </a>

               <a href="">
                  VER NO GITHUB
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
               </a>
            </div>

            <h1>JavaScript data types and data structures</h1>

            <div className="informations">
               <PostInfoCardInfoSection>
                  <FontAwesomeIcon icon={faGithub} />
                  cameronwll
               </PostInfoCardInfoSection>

               <PostInfoCardInfoSection>
                  <FontAwesomeIcon icon={faCalendarDay} />
                  Há 1 dia
               </PostInfoCardInfoSection>

               <PostInfoCardInfoSection>
                  <FontAwesomeIcon icon={faComment} />
                  5 comentários
               </PostInfoCardInfoSection>
            </div>
         </PostInfoCardContent>
      </PostInfoCardContainer>
   )
}