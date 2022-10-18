import { Route, Routes } from "react-router-dom"
import { Explore, HomePage, ShowMarkdown, UserMarkdowns } from "../pages"

export const MyMarkdownRouter = () => {
  return (
    <Routes>

      <Route path="/" element={ <HomePage /> }/>

      <Route path="/explore" element={ <Explore /> } />
      
      <Route path="/markdowns/1" element={ <ShowMarkdown /> } />

      <Route path="/markdowns/user/1" element={ <UserMarkdowns /> } />


    </Routes>
  )
}
