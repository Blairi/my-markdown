import { Route, Routes } from "react-router-dom"
import { AuthRouter } from "../modules/auth/router/AuthRouter"
import { DashboardRouter } from "../modules/dashboard/router/DashboardRouter"
import { MyMarkdownRouter } from "../modules/MyMarkdown/router/MyMarkdownRouter"

export const AppRouter = () => {
  return (
    <Routes>


      <Route path="/*" element={ <MyMarkdownRouter /> }/>

      <Route path="auth/*" element={ <AuthRouter /> }/>
      
      <Route path="/dashboard/*" element={ <DashboardRouter /> }/>
      
    </Routes>
  )
}
