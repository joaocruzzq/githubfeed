import { ProfileCardContainer, ProfileCardContent, ProfileInformationCard } from "./styles"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons"

export function ProfileCard() {
   return (
      <ProfileCardContainer>
         <img src="/img-placeholder.jpg" alt="" />

         <ProfileCardContent>
            <div className="profile-header">
               <h1>Cameron Williamson</h1>

               <a href="">
                  GITHUB
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
               </a>
            </div>

            <span>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</span>

            <div className="informations">
               <ProfileInformationCard>
                  <FontAwesomeIcon icon={faGithub} />
                  cameronwll
               </ProfileInformationCard>

               <ProfileInformationCard>
                  <FontAwesomeIcon icon={faBuilding} />
                  Rocketseat
               </ProfileInformationCard>

               <ProfileInformationCard>
                  <FontAwesomeIcon icon={faUserGroup} />
                  32 seguidores
               </ProfileInformationCard>
            </div>
         </ProfileCardContent>
      </ProfileCardContainer>
   )
}