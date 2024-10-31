import { PostCardContainer, PostCardContent } from "./styles"

import { dateFormatter } from "../../../../utils/formatter"

interface PostCardProps {
   title: string
   body: string
   created_at: string
}

export function PostCard(props: PostCardProps) {
   return (
      <PostCardContainer>
         <PostCardContent>
            <h1>{props.title}</h1>
            <strong>{dateFormatter.format(new Date(props.created_at))}</strong>
         </PostCardContent>

         <span>{props.body}</span>
      </PostCardContainer>
   )
}