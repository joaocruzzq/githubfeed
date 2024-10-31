import { PostCardContainer, PostCardContent } from "./styles"

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
            <strong>{props.created_at}</strong>
         </PostCardContent>

         <span>{props.body}</span>
      </PostCardContainer>
   )
}