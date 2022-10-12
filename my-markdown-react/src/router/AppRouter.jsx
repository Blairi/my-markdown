import { Route, Routes } from "react-router-dom"
import { AuthRouter } from "../auth/router/AuthRouter"
import { MyMarkdownRouter } from "../MyMarkdown/router/MyMarkdownRouter"

export const AppRouter = () => {
  return (
    <Routes>

      <Route path="auth/*" element={ <AuthRouter /> }/>

      <Route path="/*" element={ <MyMarkdownRouter /> }/>
      
    </Routes>
  )
}
