import { Routes, Route } from "react-router-dom"

import { Home } from "./pages/home"
import { Post } from "./pages/post"

export function Router() {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/post" element={<Post />} />
      </Routes>
   )
}