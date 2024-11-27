import { ProfileCardContainer, ProfileCardContent, ProfileInformationCard } from "./styles"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons"

import { api } from "../../../../lib/axios";

import { useEffect, useState } from "react";

interface UserInfoProps {
   name: string
   avatar_url: string
   login: string
   followers: number
   company: string
   bio: string
}

export function ProfileCard() {
   const [userInfo, setUserInfo] = useState<UserInfoProps>()

   useEffect(() => {
      async function fetchUserInfo() {
         const response = await api.get('/users/joaocruzzq')
   
         setUserInfo(response.data)
      }

      fetchUserInfo()
   }, [])

   return (
      <ProfileCardContainer>
         <img src={userInfo?.avatar_url} alt="" />

         <ProfileCardContent>
            <div className="profile-header">
               <h1>{userInfo?.name}</h1>

               <a target="_blank" href="https://github.com/joaocruzzq">
                  GITHUB
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
               </a>
            </div>

            <span>{userInfo?.bio}</span>

            <div className="informations">
               <ProfileInformationCard>
                  <FontAwesomeIcon icon={faGithub} />
                  {userInfo?.login}
               </ProfileInformationCard>

               {userInfo?.company && (
                  <ProfileInformationCard>
                     <FontAwesomeIcon icon={faBuilding} />
                     {userInfo?.company}
                  </ProfileInformationCard>
               )}

               <ProfileInformationCard>
                  <FontAwesomeIcon icon={faUserGroup} />
                  {userInfo?.followers} seguidores
               </ProfileInformationCard>
            </div>
         </ProfileCardContent>
      </ProfileCardContainer>
   )
}