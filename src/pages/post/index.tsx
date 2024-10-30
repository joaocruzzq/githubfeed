import { Header } from "../../components/header";
import { PostInfoCard } from "./components/post-info-card";
import { PostPageContainer, PostPageContent } from "./styles";

export function Post() {
   return (
      <>
      <Header />

      <PostPageContainer>
         <PostInfoCard />

         <PostPageContent>
            <div className="main-text">
               <p><strong>Programming languages all have built-in data structures, but these often differ from one language to another.</strong> This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
               </p>

               <br />

               <span>Dynamic typing</span>
               <p>JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
               </p>
            </div>

            <div className="code-card">
               <p>
               let foo = 42; // foo is now a number <br />
               foo = ‘bar’; // foo is now a string <br />
               foo = true; // foo is now a boolean
               </p>
            </div>
         </PostPageContent>
      </PostPageContainer>
      </>
   )
}