import { PostCardContainer, PostCardContent } from "./styles"

import { dateFormatter } from "../../../../utils/formatter"

import * as RadioGroup from "@radix-ui/react-radio-group";

interface PostCardProps {
   title: string
   body: string
   created_at: string
}

export function PostCard(props: PostCardProps) {
   return (
      <RadioGroup.Root>
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