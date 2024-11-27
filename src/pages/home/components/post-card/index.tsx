import { PostCardContainer, PostCardContent } from "./styles"

import { dateFormatter } from "../../../../utils/formatter"

import * as RadioGroup from "@radix-ui/react-radio-group";

import { useNavigate } from "react-router-dom";

interface PostCardProps {
   number: number
   title: string
   body: string
   created_at: string
}

export function PostCard(props: PostCardProps) {
   const navigate = useNavigate()

   function handlePostCard(){
      navigate(`/post/${props.number}`)
   }

   return (
      <RadioGroup.Root onClick={handlePostCard}>
         <PostCardContainer value={props.title}>
            <PostCardContent>
               <h1>{props.title}</h1>
               <strong>{dateFormatter.format(new Date(props.created_at))}</strong>
            </PostCardContent>

            <span>{props.body}</span>
         </PostCardContainer>
      </RadioGroup.Root>
   )
}